
export enum AppTab {
  KAFKA = 'kafka',
  DAPR = 'dapr',
  SDD = 'sdd',
  RESOURCES = 'resources'
}

export interface Recommendation {
  name: string;
  freeTier: string;
  pros: string[];
  cons: string[];
  featured?: boolean;
}

export interface DaprUseCase {
  title: string;
  description: string;
  codeBefore: string;
  codeAfter: string;
  benefit: string;
}
