function TraceInfoFlag() {
    this.traceFlag = new Array();
    this.traceFlag["sinewave.cpp:40c36"]=1;
}
top.TraceInfoFlag.instance = new TraceInfoFlag();
function TraceInfoLineFlag() {
    this.lineTraceFlag = new Array();
    this.lineTraceFlag["sinewave.cpp:40"]=1;
}
top.TraceInfoLineFlag.instance = new TraceInfoLineFlag();
