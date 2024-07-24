export interface BlogPost {
    id?: number;
    title: string;
    content: string;
    author?: {
      id: number;
      username: string;
      email: string;
    };
    created_at?: string;
    updated_at?: string;
  }
  