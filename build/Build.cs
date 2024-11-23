using System;
using System.Linq;
using Nuke.Common;
using Nuke.Common.CI;
using Nuke.Common.Execution;
using Nuke.Common.IO;
using Nuke.Common.ProjectModel;
using Nuke.Common.Tooling;
using Nuke.Common.Utilities.Collections;
using static Nuke.Common.EnvironmentInfo;
using static Nuke.Common.IO.FileSystemTasks;
using static Nuke.Common.IO.PathConstruction;

class Build : NukeBuild
{
    /// Support plugins are available for:
    ///   - JetBrains ReSharper        https://nuke.build/resharper
    ///   - JetBrains Rider            https://nuke.build/rider
    ///   - Microsoft VisualStudio     https://nuke.build/visualstudio
    ///   - Microsoft VSCode           https://nuke.build/vscode

   [PathVariable("npm")]
   readonly Tool Npm;

   [PathVariable("")]
   readonly Tool NerdbankGitversioning;


   [Parameter("Configuration to build - Default is 'Debug' (local) or 'Release' (server)")]
   readonly Configuration Configuration = IsLocalBuild ? Configuration.Debug : Configuration.Release;

  Target NpmInstall => _ => _
        .Before(Restore)
        .Executes(() =>
        {
            Npm("install");
        });

    Target Build _ => _
        .Before(Restore)
        .Executes(() =>
        {
          Npm("run build");
        });

            Target Changelog => _ => _
                .DependsOn(Version)
                .Description("Creates a changelog of the current commit.")
                .AssuredAfterFailure()
                .Executes(() =>
                {
                    if (IsLocalBuild)
                        AutoChangelogTool($"-v  {OctopusVersion} -o {ChangeLogFile}",
                            RootDirectory.ToString()); // Use .autochangelog settings in file.
                });


    Target RunPrettier => _ => _
        .Executes(() =>
        {
        });

    Target NerdbankGitversioning => _ => _
        .DependsOn(Restore)
        .Executes(() =>
        {
          NerdbankGitversioning("");
        });

    Target NerdbankGitversioning => _ => _
        .DependsOn(Restore)
        .Executes(() =>
        {
          NerdbankGitversioning("");
        });

}
