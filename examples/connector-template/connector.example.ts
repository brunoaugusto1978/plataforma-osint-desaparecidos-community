export interface PublicConnectorExample {
  sourceId: string;
  sourceName: string;
  run: (query: string) => Promise<Array<{ title: string; url: string }>>;
}

export const demoConnector: PublicConnectorExample = {
  sourceId: 'demo-public-source',
  sourceName: 'Fonte pública demonstrativa',
  async run(query: string) {
    return [
      {
        title: `Resultado fictício para ${query}`,
        url: 'https://example.org/demo'
      }
    ];
  }
};
