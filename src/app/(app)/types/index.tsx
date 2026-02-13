import { colorMap } from "@/data";


type ProgramColor = keyof typeof colorMap;

export interface Program {
  id: string;
  title: string;
  color: ProgramColor; 
  description: string;
  buttonHref: string;
  buttonText: string;
  achievements: {
    title: string;
    description: string;
  }[];
}
