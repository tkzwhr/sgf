import { SGFToken } from './types';

type TokenizeBufferIterOptions = {
  encoding?: string;
};

export declare function tokenizeIter(contents: string): Generator<SGFToken, void>;

export declare function tokenize(contents: string): SGFToken[];

export declare function tokenizeBufferIter(buffer: Buffer, options?: TokenizeBufferIterOptions): Generator<SGFToken, void>;

export declare function tokenizeBuffer(buffer: Buffer, options?: TokenizeBufferIterOptions): SGFToken[];
