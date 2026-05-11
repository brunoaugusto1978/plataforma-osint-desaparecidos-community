import { mockCases, getCaseById } from '../mocks/cases.mock';

export const caseServiceMock = {
  listCases: () => Promise.resolve(mockCases),
  getCaseById: (id: string) => Promise.resolve(getCaseById(id))
};
