/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */
package com.linkedin.pegasus2avro.execution;  
@SuppressWarnings("all")
/** The result of an execution request */
@org.apache.avro.specific.AvroGenerated
public class ExecutionRequestResult extends org.apache.avro.specific.SpecificRecordBase implements org.apache.avro.specific.SpecificRecord {
  public static final org.apache.avro.Schema SCHEMA$ = new org.apache.avro.Schema.Parser().parse("{\"type\":\"record\",\"name\":\"ExecutionRequestResult\",\"namespace\":\"com.linkedin.pegasus2avro.execution\",\"doc\":\"The result of an execution request\",\"fields\":[{\"name\":\"status\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"The status of the execution request\"},{\"name\":\"report\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"The pretty-printed execution report.\",\"default\":null},{\"name\":\"structuredReport\",\"type\":[\"null\",{\"type\":\"record\",\"name\":\"StructuredExecutionReport\",\"doc\":\"A flexible carrier for structured results of an execution request.\\nThe goal is to allow for free flow of structured responses from execution tasks to the orchestrator or observer.\\nThe full spectrum of different execution report types is not intended to be modeled by this object.\",\"fields\":[{\"name\":\"type\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"The type of the structured report. (e.g. INGESTION_REPORT, TEST_CONNECTION_REPORT, etc.)\"},{\"name\":\"serializedValue\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"The serialized value of the structured report\"},{\"name\":\"contentType\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"The content-type of the serialized value (e.g. application/json, application/json;gzip etc.)\"}]}],\"doc\":\"A structured report if available.\",\"default\":null},{\"name\":\"startTimeMs\",\"type\":[\"null\",\"long\"],\"doc\":\"Time at which the request was created\",\"default\":null,\"Searchable\":{\"fieldName\":\"startTimeMs\",\"fieldType\":\"COUNT\",\"queryByDefault\":false}},{\"name\":\"durationMs\",\"type\":[\"null\",\"long\"],\"doc\":\"Duration in milliseconds\",\"default\":null}],\"Aspect\":{\"name\":\"dataHubExecutionRequestResult\"}}");
  public static org.apache.avro.Schema getClassSchema() { return SCHEMA$; }
  /** The status of the execution request */
  @Deprecated public java.lang.String status;
  /** The pretty-printed execution report. */
  @Deprecated public java.lang.String report;
  /** A structured report if available. */
  @Deprecated public com.linkedin.pegasus2avro.execution.StructuredExecutionReport structuredReport;
  /** Time at which the request was created */
  @Deprecated public java.lang.Long startTimeMs;
  /** Duration in milliseconds */
  @Deprecated public java.lang.Long durationMs;

  /**
   * Default constructor.  Note that this does not initialize fields
   * to their default values from the schema.  If that is desired then
   * one should use <code>newBuilder()</code>. 
   */
  public ExecutionRequestResult() {}

  /**
   * All-args constructor.
   */
  public ExecutionRequestResult(java.lang.String status, java.lang.String report, com.linkedin.pegasus2avro.execution.StructuredExecutionReport structuredReport, java.lang.Long startTimeMs, java.lang.Long durationMs) {
    this.status = status;
    this.report = report;
    this.structuredReport = structuredReport;
    this.startTimeMs = startTimeMs;
    this.durationMs = durationMs;
  }

  public org.apache.avro.Schema getSchema() { return SCHEMA$; }
  // Used by DatumWriter.  Applications should not call. 
  public java.lang.Object get(int field$) {
    switch (field$) {
    case 0: return status;
    case 1: return report;
    case 2: return structuredReport;
    case 3: return startTimeMs;
    case 4: return durationMs;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }
  // Used by DatumReader.  Applications should not call. 
  @SuppressWarnings(value="unchecked")
  public void put(int field$, java.lang.Object value$) {
    switch (field$) {
    case 0: status = (java.lang.String)value$; break;
    case 1: report = (java.lang.String)value$; break;
    case 2: structuredReport = (com.linkedin.pegasus2avro.execution.StructuredExecutionReport)value$; break;
    case 3: startTimeMs = (java.lang.Long)value$; break;
    case 4: durationMs = (java.lang.Long)value$; break;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }

  /**
   * Gets the value of the 'status' field.
   * The status of the execution request   */
  public java.lang.String getStatus() {
    return status;
  }

  /**
   * Sets the value of the 'status' field.
   * The status of the execution request   * @param value the value to set.
   */
  public void setStatus(java.lang.String value) {
    this.status = value;
  }

  /**
   * Gets the value of the 'report' field.
   * The pretty-printed execution report.   */
  public java.lang.String getReport() {
    return report;
  }

  /**
   * Sets the value of the 'report' field.
   * The pretty-printed execution report.   * @param value the value to set.
   */
  public void setReport(java.lang.String value) {
    this.report = value;
  }

  /**
   * Gets the value of the 'structuredReport' field.
   * A structured report if available.   */
  public com.linkedin.pegasus2avro.execution.StructuredExecutionReport getStructuredReport() {
    return structuredReport;
  }

  /**
   * Sets the value of the 'structuredReport' field.
   * A structured report if available.   * @param value the value to set.
   */
  public void setStructuredReport(com.linkedin.pegasus2avro.execution.StructuredExecutionReport value) {
    this.structuredReport = value;
  }

  /**
   * Gets the value of the 'startTimeMs' field.
   * Time at which the request was created   */
  public java.lang.Long getStartTimeMs() {
    return startTimeMs;
  }

  /**
   * Sets the value of the 'startTimeMs' field.
   * Time at which the request was created   * @param value the value to set.
   */
  public void setStartTimeMs(java.lang.Long value) {
    this.startTimeMs = value;
  }

  /**
   * Gets the value of the 'durationMs' field.
   * Duration in milliseconds   */
  public java.lang.Long getDurationMs() {
    return durationMs;
  }

  /**
   * Sets the value of the 'durationMs' field.
   * Duration in milliseconds   * @param value the value to set.
   */
  public void setDurationMs(java.lang.Long value) {
    this.durationMs = value;
  }

  /** Creates a new ExecutionRequestResult RecordBuilder */
  public static com.linkedin.pegasus2avro.execution.ExecutionRequestResult.Builder newBuilder() {
    return new com.linkedin.pegasus2avro.execution.ExecutionRequestResult.Builder();
  }
  
  /** Creates a new ExecutionRequestResult RecordBuilder by copying an existing Builder */
  public static com.linkedin.pegasus2avro.execution.ExecutionRequestResult.Builder newBuilder(com.linkedin.pegasus2avro.execution.ExecutionRequestResult.Builder other) {
    return new com.linkedin.pegasus2avro.execution.ExecutionRequestResult.Builder(other);
  }
  
  /** Creates a new ExecutionRequestResult RecordBuilder by copying an existing ExecutionRequestResult instance */
  public static com.linkedin.pegasus2avro.execution.ExecutionRequestResult.Builder newBuilder(com.linkedin.pegasus2avro.execution.ExecutionRequestResult other) {
    return new com.linkedin.pegasus2avro.execution.ExecutionRequestResult.Builder(other);
  }
  
  /**
   * RecordBuilder for ExecutionRequestResult instances.
   */
  public static class Builder extends org.apache.avro.specific.SpecificRecordBuilderBase<ExecutionRequestResult>
    implements org.apache.avro.data.RecordBuilder<ExecutionRequestResult> {

    private java.lang.String status;
    private java.lang.String report;
    private com.linkedin.pegasus2avro.execution.StructuredExecutionReport structuredReport;
    private java.lang.Long startTimeMs;
    private java.lang.Long durationMs;

    /** Creates a new Builder */
    private Builder() {
      super(com.linkedin.pegasus2avro.execution.ExecutionRequestResult.SCHEMA$);
    }
    
    /** Creates a Builder by copying an existing Builder */
    private Builder(com.linkedin.pegasus2avro.execution.ExecutionRequestResult.Builder other) {
      super(other);
      if (isValidValue(fields()[0], other.status)) {
        this.status = data().deepCopy(fields()[0].schema(), other.status);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.report)) {
        this.report = data().deepCopy(fields()[1].schema(), other.report);
        fieldSetFlags()[1] = true;
      }
      if (isValidValue(fields()[2], other.structuredReport)) {
        this.structuredReport = data().deepCopy(fields()[2].schema(), other.structuredReport);
        fieldSetFlags()[2] = true;
      }
      if (isValidValue(fields()[3], other.startTimeMs)) {
        this.startTimeMs = data().deepCopy(fields()[3].schema(), other.startTimeMs);
        fieldSetFlags()[3] = true;
      }
      if (isValidValue(fields()[4], other.durationMs)) {
        this.durationMs = data().deepCopy(fields()[4].schema(), other.durationMs);
        fieldSetFlags()[4] = true;
      }
    }
    
    /** Creates a Builder by copying an existing ExecutionRequestResult instance */
    private Builder(com.linkedin.pegasus2avro.execution.ExecutionRequestResult other) {
            super(com.linkedin.pegasus2avro.execution.ExecutionRequestResult.SCHEMA$);
      if (isValidValue(fields()[0], other.status)) {
        this.status = data().deepCopy(fields()[0].schema(), other.status);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.report)) {
        this.report = data().deepCopy(fields()[1].schema(), other.report);
        fieldSetFlags()[1] = true;
      }
      if (isValidValue(fields()[2], other.structuredReport)) {
        this.structuredReport = data().deepCopy(fields()[2].schema(), other.structuredReport);
        fieldSetFlags()[2] = true;
      }
      if (isValidValue(fields()[3], other.startTimeMs)) {
        this.startTimeMs = data().deepCopy(fields()[3].schema(), other.startTimeMs);
        fieldSetFlags()[3] = true;
      }
      if (isValidValue(fields()[4], other.durationMs)) {
        this.durationMs = data().deepCopy(fields()[4].schema(), other.durationMs);
        fieldSetFlags()[4] = true;
      }
    }

    /** Gets the value of the 'status' field */
    public java.lang.String getStatus() {
      return status;
    }
    
    /** Sets the value of the 'status' field */
    public com.linkedin.pegasus2avro.execution.ExecutionRequestResult.Builder setStatus(java.lang.String value) {
      validate(fields()[0], value);
      this.status = value;
      fieldSetFlags()[0] = true;
      return this; 
    }
    
    /** Checks whether the 'status' field has been set */
    public boolean hasStatus() {
      return fieldSetFlags()[0];
    }
    
    /** Clears the value of the 'status' field */
    public com.linkedin.pegasus2avro.execution.ExecutionRequestResult.Builder clearStatus() {
      status = null;
      fieldSetFlags()[0] = false;
      return this;
    }

    /** Gets the value of the 'report' field */
    public java.lang.String getReport() {
      return report;
    }
    
    /** Sets the value of the 'report' field */
    public com.linkedin.pegasus2avro.execution.ExecutionRequestResult.Builder setReport(java.lang.String value) {
      validate(fields()[1], value);
      this.report = value;
      fieldSetFlags()[1] = true;
      return this; 
    }
    
    /** Checks whether the 'report' field has been set */
    public boolean hasReport() {
      return fieldSetFlags()[1];
    }
    
    /** Clears the value of the 'report' field */
    public com.linkedin.pegasus2avro.execution.ExecutionRequestResult.Builder clearReport() {
      report = null;
      fieldSetFlags()[1] = false;
      return this;
    }

    /** Gets the value of the 'structuredReport' field */
    public com.linkedin.pegasus2avro.execution.StructuredExecutionReport getStructuredReport() {
      return structuredReport;
    }
    
    /** Sets the value of the 'structuredReport' field */
    public com.linkedin.pegasus2avro.execution.ExecutionRequestResult.Builder setStructuredReport(com.linkedin.pegasus2avro.execution.StructuredExecutionReport value) {
      validate(fields()[2], value);
      this.structuredReport = value;
      fieldSetFlags()[2] = true;
      return this; 
    }
    
    /** Checks whether the 'structuredReport' field has been set */
    public boolean hasStructuredReport() {
      return fieldSetFlags()[2];
    }
    
    /** Clears the value of the 'structuredReport' field */
    public com.linkedin.pegasus2avro.execution.ExecutionRequestResult.Builder clearStructuredReport() {
      structuredReport = null;
      fieldSetFlags()[2] = false;
      return this;
    }

    /** Gets the value of the 'startTimeMs' field */
    public java.lang.Long getStartTimeMs() {
      return startTimeMs;
    }
    
    /** Sets the value of the 'startTimeMs' field */
    public com.linkedin.pegasus2avro.execution.ExecutionRequestResult.Builder setStartTimeMs(java.lang.Long value) {
      validate(fields()[3], value);
      this.startTimeMs = value;
      fieldSetFlags()[3] = true;
      return this; 
    }
    
    /** Checks whether the 'startTimeMs' field has been set */
    public boolean hasStartTimeMs() {
      return fieldSetFlags()[3];
    }
    
    /** Clears the value of the 'startTimeMs' field */
    public com.linkedin.pegasus2avro.execution.ExecutionRequestResult.Builder clearStartTimeMs() {
      startTimeMs = null;
      fieldSetFlags()[3] = false;
      return this;
    }

    /** Gets the value of the 'durationMs' field */
    public java.lang.Long getDurationMs() {
      return durationMs;
    }
    
    /** Sets the value of the 'durationMs' field */
    public com.linkedin.pegasus2avro.execution.ExecutionRequestResult.Builder setDurationMs(java.lang.Long value) {
      validate(fields()[4], value);
      this.durationMs = value;
      fieldSetFlags()[4] = true;
      return this; 
    }
    
    /** Checks whether the 'durationMs' field has been set */
    public boolean hasDurationMs() {
      return fieldSetFlags()[4];
    }
    
    /** Clears the value of the 'durationMs' field */
    public com.linkedin.pegasus2avro.execution.ExecutionRequestResult.Builder clearDurationMs() {
      durationMs = null;
      fieldSetFlags()[4] = false;
      return this;
    }

    @Override
    public ExecutionRequestResult build() {
      try {
        ExecutionRequestResult record = new ExecutionRequestResult();
        record.status = fieldSetFlags()[0] ? this.status : (java.lang.String) defaultValue(fields()[0]);
        record.report = fieldSetFlags()[1] ? this.report : (java.lang.String) defaultValue(fields()[1]);
        record.structuredReport = fieldSetFlags()[2] ? this.structuredReport : (com.linkedin.pegasus2avro.execution.StructuredExecutionReport) defaultValue(fields()[2]);
        record.startTimeMs = fieldSetFlags()[3] ? this.startTimeMs : (java.lang.Long) defaultValue(fields()[3]);
        record.durationMs = fieldSetFlags()[4] ? this.durationMs : (java.lang.Long) defaultValue(fields()[4]);
        return record;
      } catch (Exception e) {
        throw new org.apache.avro.AvroRuntimeException(e);
      }
    }
  }
}
