/**
 *  DeltaLog - log of current and recent historical deltas
 *  Intent is to log all deltas from the current delta to recent historical deltas,
 *  so key information is stored, and other systems using deltas as polling integration points
 *  can poll at almost arbitrary frequency
 *
 *  The deltas in the DeltaLog is intended to provide most of the useful information
 *  about a CVE, so that
 *    1. the data can be used as a filter
 *    2. minimize REST calls to CVE REST Services
 */
import { Delta } from './Delta.js';
export declare class DeltaLog extends Array<Delta> {
    static kDeltaLogFilename: string;
    static kDeltaLogFile: string;
    constructor();
    /** constructs a DeltaLog by reading in the deltaLog file */
    static fromLogFile(relFilepath?: string): DeltaLog;
    /**
     * prepends a delta to log
     * @param delta the Delta object to prepend
     */
    prepend(delta: Delta): void;
    /** sorts the Deltas in place by date
     *  @param direction: "latestFirst" | "latestLast"
    */
    sortByFetchTme(direction: "latestFirst" | "latestLast"): DeltaLog;
    /** writes deltas to a file
      */
    writeFile(relFilepath?: string): void;
}
