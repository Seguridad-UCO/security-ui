
    export type RemoteKeys = 'REMOTE_ALIAS_IDENTIFIER/security-administration';
    type PackageType<T> = T extends 'REMOTE_ALIAS_IDENTIFIER/security-administration' ? typeof import('REMOTE_ALIAS_IDENTIFIER/security-administration') :any;