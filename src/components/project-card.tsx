import Image from "next/image";

interface ProjectCardProps {
  projectName: string,
  projectType: string,
  image: string,
}

export default function ProjectCard ({ projectName, projectType, image }: ProjectCardProps) {
  return (
    <div className="flex flex-col cursor-pointer">
      <Image className="rounded-2xl" src={image} height={545} width={436} alt={projectName}/>
      <div className="flex flex-col mt-6">
        <span className="text-grey-200 text-sm lg:text-base mb-1">{projectType}</span>
        <span className="text-grey-200 text-lg lg:text-xl">{projectName}</span>
      </div>
    </div>
  )
}