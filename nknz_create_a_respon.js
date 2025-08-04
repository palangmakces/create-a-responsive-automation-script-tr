const scriptTracker = {
  // Array to store script executions
  executions: [],

  // Object to hold script metadata
  metadata: {
    scriptName: '',
    scriptDescription: '',
    scriptAuthor: '',
    scriptVersion: '1.0.0'
  },

  // Function to track script execution
  trackExecution: function(executionData) {
    const newExecution = {
      timestamp: new Date().toLocaleString(),
      functionName: executionData.functionName,
      inputData: executionData.inputData,
      outputData: executionData.outputData,
      executionStatus: executionData.executionStatus
    };
    this.executions.push(newExecution);
  },

  // Function to get all script executions
  getExecutions: function() {
    return this.executions;
  },

  // Function to get script metadata
  getMetadata: function() {
    return this.metadata;
  },

  // Function to update script metadata
  updateMetadata: function(newMetadata) {
    this.metadata = { ...this.metadata, ...newMetadata };
  }
};

// Example usage
scriptTracker.updateMetadata({
  scriptName: 'Automation Script Tracker',
  scriptDescription: 'A script that tracks its own executions',
  scriptAuthor: 'NKNZ'
});

scriptTracker.trackExecution({
  functionName: 'myFunction',
  inputData: { foo: 'bar' },
  outputData: { result: 'success' },
  executionStatus: 'successful'
});

console.log(scriptTracker.getExecutions());
console.log(scriptTracker.getMetadata());