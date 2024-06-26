/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */
package com.linkedin.pegasus2avro.metadata.key;  
@SuppressWarnings("all")
/** Key for a Data Flow */
@org.apache.avro.specific.AvroGenerated
public class DataFlowKey extends org.apache.avro.specific.SpecificRecordBase implements org.apache.avro.specific.SpecificRecord {
  public static final org.apache.avro.Schema SCHEMA$ = new org.apache.avro.Schema.Parser().parse("{\"type\":\"record\",\"name\":\"DataFlowKey\",\"namespace\":\"com.linkedin.pegasus2avro.metadata.key\",\"doc\":\"Key for a Data Flow\",\"fields\":[{\"name\":\"orchestrator\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"Workflow manager like azkaban, airflow which orchestrates the flow\",\"Searchable\":{\"fieldType\":\"TEXT_PARTIAL\"}},{\"name\":\"flowId\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"Unique Identifier of the data flow\",\"Searchable\":{\"enableAutocomplete\":true,\"fieldType\":\"TEXT_PARTIAL\"}},{\"name\":\"cluster\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"Cluster where the flow is executed\",\"Searchable\":{\"fieldType\":\"TEXT_PARTIAL\"}}],\"Aspect\":{\"name\":\"dataFlowKey\"}}");
  public static org.apache.avro.Schema getClassSchema() { return SCHEMA$; }
  /** Workflow manager like azkaban, airflow which orchestrates the flow */
  @Deprecated public java.lang.String orchestrator;
  /** Unique Identifier of the data flow */
  @Deprecated public java.lang.String flowId;
  /** Cluster where the flow is executed */
  @Deprecated public java.lang.String cluster;

  /**
   * Default constructor.  Note that this does not initialize fields
   * to their default values from the schema.  If that is desired then
   * one should use <code>newBuilder()</code>. 
   */
  public DataFlowKey() {}

  /**
   * All-args constructor.
   */
  public DataFlowKey(java.lang.String orchestrator, java.lang.String flowId, java.lang.String cluster) {
    this.orchestrator = orchestrator;
    this.flowId = flowId;
    this.cluster = cluster;
  }

  public org.apache.avro.Schema getSchema() { return SCHEMA$; }
  // Used by DatumWriter.  Applications should not call. 
  public java.lang.Object get(int field$) {
    switch (field$) {
    case 0: return orchestrator;
    case 1: return flowId;
    case 2: return cluster;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }
  // Used by DatumReader.  Applications should not call. 
  @SuppressWarnings(value="unchecked")
  public void put(int field$, java.lang.Object value$) {
    switch (field$) {
    case 0: orchestrator = (java.lang.String)value$; break;
    case 1: flowId = (java.lang.String)value$; break;
    case 2: cluster = (java.lang.String)value$; break;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }

  /**
   * Gets the value of the 'orchestrator' field.
   * Workflow manager like azkaban, airflow which orchestrates the flow   */
  public java.lang.String getOrchestrator() {
    return orchestrator;
  }

  /**
   * Sets the value of the 'orchestrator' field.
   * Workflow manager like azkaban, airflow which orchestrates the flow   * @param value the value to set.
   */
  public void setOrchestrator(java.lang.String value) {
    this.orchestrator = value;
  }

  /**
   * Gets the value of the 'flowId' field.
   * Unique Identifier of the data flow   */
  public java.lang.String getFlowId() {
    return flowId;
  }

  /**
   * Sets the value of the 'flowId' field.
   * Unique Identifier of the data flow   * @param value the value to set.
   */
  public void setFlowId(java.lang.String value) {
    this.flowId = value;
  }

  /**
   * Gets the value of the 'cluster' field.
   * Cluster where the flow is executed   */
  public java.lang.String getCluster() {
    return cluster;
  }

  /**
   * Sets the value of the 'cluster' field.
   * Cluster where the flow is executed   * @param value the value to set.
   */
  public void setCluster(java.lang.String value) {
    this.cluster = value;
  }

  /** Creates a new DataFlowKey RecordBuilder */
  public static com.linkedin.pegasus2avro.metadata.key.DataFlowKey.Builder newBuilder() {
    return new com.linkedin.pegasus2avro.metadata.key.DataFlowKey.Builder();
  }
  
  /** Creates a new DataFlowKey RecordBuilder by copying an existing Builder */
  public static com.linkedin.pegasus2avro.metadata.key.DataFlowKey.Builder newBuilder(com.linkedin.pegasus2avro.metadata.key.DataFlowKey.Builder other) {
    return new com.linkedin.pegasus2avro.metadata.key.DataFlowKey.Builder(other);
  }
  
  /** Creates a new DataFlowKey RecordBuilder by copying an existing DataFlowKey instance */
  public static com.linkedin.pegasus2avro.metadata.key.DataFlowKey.Builder newBuilder(com.linkedin.pegasus2avro.metadata.key.DataFlowKey other) {
    return new com.linkedin.pegasus2avro.metadata.key.DataFlowKey.Builder(other);
  }
  
  /**
   * RecordBuilder for DataFlowKey instances.
   */
  public static class Builder extends org.apache.avro.specific.SpecificRecordBuilderBase<DataFlowKey>
    implements org.apache.avro.data.RecordBuilder<DataFlowKey> {

    private java.lang.String orchestrator;
    private java.lang.String flowId;
    private java.lang.String cluster;

    /** Creates a new Builder */
    private Builder() {
      super(com.linkedin.pegasus2avro.metadata.key.DataFlowKey.SCHEMA$);
    }
    
    /** Creates a Builder by copying an existing Builder */
    private Builder(com.linkedin.pegasus2avro.metadata.key.DataFlowKey.Builder other) {
      super(other);
      if (isValidValue(fields()[0], other.orchestrator)) {
        this.orchestrator = data().deepCopy(fields()[0].schema(), other.orchestrator);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.flowId)) {
        this.flowId = data().deepCopy(fields()[1].schema(), other.flowId);
        fieldSetFlags()[1] = true;
      }
      if (isValidValue(fields()[2], other.cluster)) {
        this.cluster = data().deepCopy(fields()[2].schema(), other.cluster);
        fieldSetFlags()[2] = true;
      }
    }
    
    /** Creates a Builder by copying an existing DataFlowKey instance */
    private Builder(com.linkedin.pegasus2avro.metadata.key.DataFlowKey other) {
            super(com.linkedin.pegasus2avro.metadata.key.DataFlowKey.SCHEMA$);
      if (isValidValue(fields()[0], other.orchestrator)) {
        this.orchestrator = data().deepCopy(fields()[0].schema(), other.orchestrator);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.flowId)) {
        this.flowId = data().deepCopy(fields()[1].schema(), other.flowId);
        fieldSetFlags()[1] = true;
      }
      if (isValidValue(fields()[2], other.cluster)) {
        this.cluster = data().deepCopy(fields()[2].schema(), other.cluster);
        fieldSetFlags()[2] = true;
      }
    }

    /** Gets the value of the 'orchestrator' field */
    public java.lang.String getOrchestrator() {
      return orchestrator;
    }
    
    /** Sets the value of the 'orchestrator' field */
    public com.linkedin.pegasus2avro.metadata.key.DataFlowKey.Builder setOrchestrator(java.lang.String value) {
      validate(fields()[0], value);
      this.orchestrator = value;
      fieldSetFlags()[0] = true;
      return this; 
    }
    
    /** Checks whether the 'orchestrator' field has been set */
    public boolean hasOrchestrator() {
      return fieldSetFlags()[0];
    }
    
    /** Clears the value of the 'orchestrator' field */
    public com.linkedin.pegasus2avro.metadata.key.DataFlowKey.Builder clearOrchestrator() {
      orchestrator = null;
      fieldSetFlags()[0] = false;
      return this;
    }

    /** Gets the value of the 'flowId' field */
    public java.lang.String getFlowId() {
      return flowId;
    }
    
    /** Sets the value of the 'flowId' field */
    public com.linkedin.pegasus2avro.metadata.key.DataFlowKey.Builder setFlowId(java.lang.String value) {
      validate(fields()[1], value);
      this.flowId = value;
      fieldSetFlags()[1] = true;
      return this; 
    }
    
    /** Checks whether the 'flowId' field has been set */
    public boolean hasFlowId() {
      return fieldSetFlags()[1];
    }
    
    /** Clears the value of the 'flowId' field */
    public com.linkedin.pegasus2avro.metadata.key.DataFlowKey.Builder clearFlowId() {
      flowId = null;
      fieldSetFlags()[1] = false;
      return this;
    }

    /** Gets the value of the 'cluster' field */
    public java.lang.String getCluster() {
      return cluster;
    }
    
    /** Sets the value of the 'cluster' field */
    public com.linkedin.pegasus2avro.metadata.key.DataFlowKey.Builder setCluster(java.lang.String value) {
      validate(fields()[2], value);
      this.cluster = value;
      fieldSetFlags()[2] = true;
      return this; 
    }
    
    /** Checks whether the 'cluster' field has been set */
    public boolean hasCluster() {
      return fieldSetFlags()[2];
    }
    
    /** Clears the value of the 'cluster' field */
    public com.linkedin.pegasus2avro.metadata.key.DataFlowKey.Builder clearCluster() {
      cluster = null;
      fieldSetFlags()[2] = false;
      return this;
    }

    @Override
    public DataFlowKey build() {
      try {
        DataFlowKey record = new DataFlowKey();
        record.orchestrator = fieldSetFlags()[0] ? this.orchestrator : (java.lang.String) defaultValue(fields()[0]);
        record.flowId = fieldSetFlags()[1] ? this.flowId : (java.lang.String) defaultValue(fields()[1]);
        record.cluster = fieldSetFlags()[2] ? this.cluster : (java.lang.String) defaultValue(fields()[2]);
        return record;
      } catch (Exception e) {
        throw new org.apache.avro.AvroRuntimeException(e);
      }
    }
  }
}
