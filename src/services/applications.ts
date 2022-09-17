import { request } from 'ice';

interface History {
    user: string;
    parentCommitId?: string;
    time: string;
    commitId: string;
    projectId: string;
    commitMsg: string;
    filePath: string;
    branch: string;
}

interface ApplicationInfo {
    name: string;
    desc: string;
    released: boolean;
    schemaVersionHistories: History[];
    releasedSchemaCommitId: string | null;
    releasedTime: string | null;
    codeProjectId: string;
    codeCommitId: string | null;
}

export async function getApplications(BUName: string) {
  return await request<{total: number; data: ApplicationInfo[]}>({
    url: '/application/list?BUName=' + BUName,
    method: 'GET',
  });
}
