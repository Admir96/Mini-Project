export type JWT = {
    token: string;
    user: {
      id: number;
      name: string;
      email: string;
    };
  };