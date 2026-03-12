export type Project = {
  title: string
  description: string
  category: "frontend" | "creative"
  thumbnail: string
  github: string
  live: string
  longDescription: string
}

export const projects: Project[] = [
  {
    title: "Pipeline Builder",
    description: "Visualise and manage data pipelines with an intuitive drag-and-drop interface",
    category: "frontend",
    thumbnail: "/thumbs/pipeline-builder.png",
    github: "https://github.com/sh1re2ya3/pipeline-builder",
    live: "https://pipeline-builder-1-ekud.onrender.com",
    longDescription:
      "A React application that allows users to create and manage data pipelines through a visual interface. Built with React Flow for the drag-and-drop functionality and a Python API to analyze nodes and cycles of the pipeline."
  },
  {
    title: "Thoughtinator",
    description: "Creative coding experiment with particle systems",
    category: "creative",
    thumbnail: "/thumbs/thoughtinator.png",
    github: "https://github.com/sh1re2ya3/thoughtinator",
    live: "https://thoughtvortex.netlify.app/",
    longDescription:
      "An interactive particle simulation built with javascript to visualise thoughts dissolving into spirals."
  },
   {
    title: "Forms lab",
    description: "Multiple implementations of react forms",
    category: "frontend",
    thumbnail: "/thumbs/fromslab.png",
    github: "https://github.com/sh1re2ya3/forms-lab",
    live: "https://forms-lab-lilac.vercel.app/",
    longDescription:
      "Implementation of react forms using vanilla react, react-hook-form and formik. Inlcuding multiple types and inputs and validation.Using component composition and render props patterns."
  }
]