import { Dates, Vertex } from './types';

export declare function escapeString(input: string): string;

export declare function unescapeString(input: string): string;

export declare function parseVertex(input: string): Vertex;

export declare function stringifyVertex(input: Vertex): string;

export declare function parseCompressedVertices(input: string): Vertex[];

export declare function parseDates(input: string): Dates[] | null;

export declare function stringifyDates(input: Dates[]): string;
