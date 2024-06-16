import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  apolloGraphql,
  astro,
  azure,
  aws,
  blazor,
  csharp,
  dotnet,
  helm,
  kubernetes,
  octopusdeploy,
  teamcity,
  postgreSql,
  Go,
} from '../helpers/skills';

const skillsSectionData = {
  config: {
    title: 'Skills',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [
    {
      title: 'I already know',
      skills: [

        azure({
          level: 5,
          description:
            '',
        }),

        aws({
          level: 5,
          description:
            'Proin ut erat sed massa tempus suscipit. Mauris efficitur nunc sem, nec scelerisque ligula bibendum ut.',
        }),

        blazor({
          level: 5,
          description:
            'Proin ut erat sed massa tempus suscipit. Mauris efficitur nunc sem, nec scelerisque ligula bibendum ut.',
        }),

        csharp({
          level: 5,
          description:
            'I am proficient in C#, with extensive experience in building robust, scalable applications. My expertise spans various aspects of C# development, including OOP and Web Development',
        }),

        dotnet({
          level: 5,
          description:
            'I have vast expertise in the build and deployment of dotnet core applications, up to dotnet core 8.',
        }),

        helm({
          level: 5,
          description:
            'Proin ut erat sed massa tempus suscipit. Mauris efficitur nunc sem, nec scelerisque ligula bibendum ut.',
        }),

        kubernetes({
          level: 5,
          description:
            'Proin ut erat sed massa tempus suscipit. Mauris efficitur nunc sem, nec scelerisque ligula bibendum ut.',
        }),

        octopusdeploy({
          level: 5,
          description:
            'Proin ut erat sed massa tempus suscipit. Mauris efficitur nunc sem, nec scelerisque ligula bibendum ut.',
        }),


        teamcity({
          level: 5,
          description:
            'I am adept at using TeamCity for continuous integration and continuous deployment (CI/CD), ensuring streamlined and efficient development workflows. My expertise includes build automation and artifact management.',
        }),


        helm({
          level: 4,
          description: 'Nulla interdum pellentesque ultricies. Ut id eros commodo, ultrices ligula eu, elementum ante.',
        }),

        postgreSql({ level: 2 }),


      ],
    },
    {
      title: 'I want to learn',
      skills: [apolloGraphql(), Go(), astro(),  ],
    },
    {
      title: 'I speak',
      skills: [
        { icon: 'circle-flags:uk', name: 'English' },
        { icon: 'circle-flags:in', name: 'Punjabi' }
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
