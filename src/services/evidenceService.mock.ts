import { getEvidencesByCaseId, mockEvidences } from '../mocks/evidences.mock';

export const evidenceServiceMock = {
  listEvidences: () => Promise.resolve(mockEvidences),
  listByCaseId: (caseId: string) => Promise.resolve(getEvidencesByCaseId(caseId))
};
