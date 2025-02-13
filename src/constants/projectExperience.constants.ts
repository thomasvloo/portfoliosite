export const projectsList = [
  {
    title: 'Immutable Storage of Process Logs on a Private Blockchain',
    description: `As part of my master's thesis, I developed a mechanism designed to 
      enable the storage of logs stemming from the execution of process in a BPMS
      in an immutable manner on a private blockchain. I achieved this using the 
      Hyperledger Fabric test net and a smart contract to store the log data in JSON format
      as transactions on the blockchain. In collaboration with the University Chair, this thesis
      was published in and presented at the 2024 Business Process Management Forum, in Krakow, Poland.`,
    technologies: [
      'Hyperledger Fabric',
      'NodeJs',
      'Express',
      'Javascript',
      'Git',
    ],
  },
  {
    title: 'Eco.mio User Dashboard',
    description: `Developed a user dashboard for the startup company Eco.mio,
    as part of a university internship program. Eco.mio users collect points 
    as part of an incentive program for sustainable business travel behavior. 
    The dashboard displays the user's points, travel statistics, and rewards.`,
    technologies: [
      'React',
      'Material-UI',
      'NodeJs',
      'Express',
      'PostgreSQL',
      'CSS',
      'Typescript',
      'Git',
    ],
  },
  {
    title: 'Legacy Application Documentation with GenAI',
    description: `Design and implementation of a pipeline to parse application codebases and leverage an LLM
    instance to automatically generate technical documentation. This entailed iterating over the entire application,
    parsing the code, determining dependencies, sending it to a privately hosted LLM instance in a carefully structured
    prompt, using the LLM to validate and correct its output, and finally generating a markdown file with
     the documentation.`,
    technologies: ['Python', 'LangChain', 'Ollama', 'Git', 'Neo4j'],
  },
];
