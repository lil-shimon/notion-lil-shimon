export interface Page {
  id: string;
  properties: {
    title: {
      id: string;
      type: string;
      title: [
        {
          plain_text: string;
        }
      ];
    };
  };
}
