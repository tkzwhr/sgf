import { NodeObject, Primitive, SGFToken } from './types';

type ParseTokensOptions = {
  getId?: () => void;
  dictionary?: | null;
  onProgress?: () => void;
  onNodeCreated?: () => void;
};

type ParseBufferOptions = {
  encoding?: string;
  getId?: () => void;
  dictionary?: | null;
  onProgress?: () => void;
};

export declare function parseTokens<ID extends Primitive>(tokens: SGFToken[], options?: ParseTokensOptions): NodeObject<ID>[];

export declare function parse<ID extends Primitive>(contents: string, options?: ParseTokensOptions): NodeObject<ID>[];

export declare function parseBuffer<ID extends Primitive>(contents: Buffer, options?: ParseBufferOptions): NodeObject<ID>[];

export declare function parseFile<ID extends Primitive>(filename: string, options?: ParseBufferOptions): NodeObject<ID>[];
