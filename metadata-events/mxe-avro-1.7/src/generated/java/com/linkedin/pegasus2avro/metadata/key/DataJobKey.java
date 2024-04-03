/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */
package com.linkedin.pegasus2avro.metadata.key;  
@SuppressWarnings("all")
/** Key for a Data Job */
@org.apache.avro.specific.AvroGenerated
public class DataJobKey extends org.apache.avro.specific.SpecificRecordBase implements org.apache.avro.specific.SpecificRecord {
  public static final org.apache.avro.Schema SCHEMA$ = new org.apache.avro.Schema.Parser().parse("{\"type\":\"record\",\"name\":\"DataJobKey\",\"namespace\":\"com.linkedin.pegasus2avro.metadata.key\",\"doc\":\"Key for a Data Job\",\"fields\":[{\"name\":\"flow\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"Standardized data processing flow urn representing the flow for the job\",\"Relationship\":{\"entityTypes\":[\"dataFlow\"],\"name\":\"IsPartOf\"},\"Searchable\":{\"fieldName\":\"dataFlow\",\"fieldType\":\"URN_PARTIAL\",\"queryByDefault\":false},\"java\":{\"class\":\"com.linkedin.pegasus2avro.common.urn.Urn\"}},{\"name\":\"jobId\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"Unique Identifier of the data job\",\"Searchable\":{\"enableAutocomplete\":true,\"fieldType\":\"TEXT_PARTIAL\"}}],\"Aspect\":{\"name\":\"dataJobKey\"}}");
  public static org.apache.avro.Schema getClassSchema() { return SCHEMA$; }
  /** Standardized data processing flow urn representing the flow for the job */
  @Deprecated public java.lang.String flow;
  /** Unique Identifier of the data job */
  @Deprecated public java.lang.String jobId;

  /**
   * Default constructor.  Note that this does not initialize fields
   * to their default values from the schema.  If that is desired then
   * one should use <code>newBuilder()</code>. 
   */
  public DataJobKey() {}

  /**
   * All-args constructor.
   */
  public DataJobKey(java.lang.String flow, java.lang.String jobId) {
    this.flow = flow;
    this.jobId = jobId;
  }

  public org.apache.avro.Schema getSchema() { return SCHEMA$; }
  // Used by DatumWriter.  Applications should not call. 
  public java.lang.Object get(int field$) {
    switch (field$) {
    case 0: return flow;
    case 1: return jobId;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }
  // Used by DatumReader.  Applications should not call. 
  @SuppressWarnings(value="unchecked")
  public void put(int field$, java.lang.Object value$) {
    switch (field$) {
    case 0: flow = (java.lang.String)value$; break;
    case 1: jobId = (java.lang.String)value$; break;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }

  /**
   * Gets the value of the 'flow' field.
   * Standardized data processing flow urn representing the flow for the job   */
  public java.lang.String getFlow() {
    return flow;
  }

  /**
   * Sets the value of the 'flow' field.
   * Standardized data processing flow urn representing the flow for the job   * @param value the value to set.
   */
  public void setFlow(java.lang.String value) {
    this.flow = value;
  }

  /**
   * Gets the value of the 'jobId' field.
   * Unique Identifier of the data job   */
  public java.lang.String getJobId() {
    return jobId;
  }

  /**
   * Sets the value of the 'jobId' field.
   * Unique Identifier of the data job   * @param value the value to set.
   */
  public void setJobId(java.lang.String value) {
    this.jobId = value;
  }

  /** Creates a new DataJobKey RecordBuilder */
  public static com.linkedin.pegasus2avro.metadata.key.DataJobKey.Builder newBuilder() {
    return new com.linkedin.pegasus2avro.metadata.key.DataJobKey.Builder();
  }
  
  /** Creates a new DataJobKey RecordBuilder by copying an existing Builder */
  public static com.linkedin.pegasus2avro.metadata.key.DataJobKey.Builder newBuilder(com.linkedin.pegasus2avro.metadata.key.DataJobKey.Builder other) {
    return new com.linkedin.pegasus2avro.metadata.key.DataJobKey.Builder(other);
  }
  
  /** Creates a new DataJobKey RecordBuilder by copying an existing DataJobKey instance */
  public static com.linkedin.pegasus2avro.metadata.key.DataJobKey.Builder newBuilder(com.linkedin.pegasus2avro.metadata.key.DataJobKey other) {
    return new com.linkedin.pegasus2avro.metadata.key.DataJobKey.Builder(other);
  }
  
  /**
   * RecordBuilder for DataJobKey instances.
   */
  public static class Builder extends org.apache.avro.specific.SpecificRecordBuilderBase<DataJobKey>
    implements org.apache.avro.data.RecordBuilder<DataJobKey> {

    private java.lang.String flow;
    private java.lang.String jobId;

    /** Creates a new Builder */
    private Builder() {
      super(com.linkedin.pegasus2avro.metadata.key.DataJobKey.SCHEMA$);
    }
    
    /** Creates a Builder by copying an existing Builder */
    private Builder(com.linkedin.pegasus2avro.metadata.key.DataJobKey.Builder other) {
      super(other);
      if (isValidValue(fields()[0], other.flow)) {
        this.flow = data().deepCopy(fields()[0].schema(), other.flow);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.jobId)) {
        this.jobId = data().deepCopy(fields()[1].schema(), other.jobId);
        fieldSetFlags()[1] = true;
      }
    }
    
    /** Creates a Builder by copying an existing DataJobKey instance */
    private Builder(com.linkedin.pegasus2avro.metadata.key.DataJobKey other) {
            super(com.linkedin.pegasus2avro.metadata.key.DataJobKey.SCHEMA$);
      if (isValidValue(fields()[0], other.flow)) {
        this.flow = data().deepCopy(fields()[0].schema(), other.flow);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.jobId)) {
        this.jobId = data().deepCopy(fields()[1].schema(), other.jobId);
        fieldSetFlags()[1] = true;
      }
    }

    /** Gets the value of the 'flow' field */
    public java.lang.String getFlow() {
      return flow;
    }
    
    /** Sets the value of the 'flow' field */
    public com.linkedin.pegasus2avro.metadata.key.DataJobKey.Builder setFlow(java.lang.String value) {
      validate(fields()[0], value);
      this.flow = value;
      fieldSetFlags()[0] = true;
      return this; 
    }
    
    /** Checks whether the 'flow' field has been set */
    public boolean hasFlow() {
      return fieldSetFlags()[0];
    }
    
    /** Clears the value of the 'flow' field */
    public com.linkedin.pegasus2avro.metadata.key.DataJobKey.Builder clearFlow() {
      flow = null;
      fieldSetFlags()[0] = false;
      return this;
    }

    /** Gets the value of the 'jobId' field */
    public java.lang.String getJobId() {
      return jobId;
    }
    
    /** Sets the value of the 'jobId' field */
    public com.linkedin.pegasus2avro.metadata.key.DataJobKey.Builder setJobId(java.lang.String value) {
      validate(fields()[1], value);
      this.jobId = value;
      fieldSetFlags()[1] = true;
      return this; 
    }
    
    /** Checks whether the 'jobId' field has been set */
    public boolean hasJobId() {
      return fieldSetFlags()[1];
    }
    
    /** Clears the value of the 'jobId' field */
    public com.linkedin.pegasus2avro.metadata.key.DataJobKey.Builder clearJobId() {
      jobId = null;
      fieldSetFlags()[1] = false;
      return this;
    }

    @Override
    public DataJobKey build() {
      try {
        DataJobKey record = new DataJobKey();
        record.flow = fieldSetFlags()[0] ? this.flow : (java.lang.String) defaultValue(fields()[0]);
        record.jobId = fieldSetFlags()[1] ? this.jobId : (java.lang.String) defaultValue(fields()[1]);
        return record;
      } catch (Exception e) {
        throw new org.apache.avro.AvroRuntimeException(e);
      }
    }
  }
}
