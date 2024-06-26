/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */
package com.linkedin.pegasus2avro.mxe;  
@SuppressWarnings("all")
/** Kafka event for recording a historical version upgrade. Used for backwards incompatible changes to infrastructure that requires infrastructure level blocking changes. */
@org.apache.avro.specific.AvroGenerated
public class DataHubUpgradeHistoryEvent extends org.apache.avro.specific.SpecificRecordBase implements org.apache.avro.specific.SpecificRecord {
  public static final org.apache.avro.Schema SCHEMA$ = new org.apache.avro.Schema.Parser().parse("{\"type\":\"record\",\"name\":\"DataHubUpgradeHistoryEvent\",\"namespace\":\"com.linkedin.pegasus2avro.mxe\",\"doc\":\"Kafka event for recording a historical version upgrade. Used for backwards incompatible changes to infrastructure that requires infrastructure level blocking changes.\",\"fields\":[{\"name\":\"version\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"Version of the upgrade\"},{\"name\":\"systemMetadata\",\"type\":[\"null\",{\"type\":\"record\",\"name\":\"SystemMetadata\",\"doc\":\"Metadata associated with each metadata change that is processed by the system\",\"fields\":[{\"name\":\"lastObserved\",\"type\":[\"long\",\"null\"],\"doc\":\"The timestamp the metadata was observed at\",\"default\":0},{\"name\":\"runId\",\"type\":[{\"type\":\"string\",\"avro.java.string\":\"String\"},\"null\"],\"doc\":\"The run id that produced the metadata. Populated in case of batch-ingestion.\",\"default\":\"no-run-id-provided\"},{\"name\":\"registryName\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"The model registry name that was used to process this event\",\"default\":null},{\"name\":\"registryVersion\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"The model registry version that was used to process this event\",\"default\":null},{\"name\":\"properties\",\"type\":[\"null\",{\"type\":\"map\",\"values\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"avro.java.string\":\"String\"}],\"doc\":\"Additional properties\",\"default\":null}]}],\"doc\":\"A string->string map of custom properties that one might want to attach to an event\",\"default\":null}]}");
  public static org.apache.avro.Schema getClassSchema() { return SCHEMA$; }
  /** Version of the upgrade */
  @Deprecated public java.lang.String version;
  /** A string->string map of custom properties that one might want to attach to an event */
  @Deprecated public com.linkedin.pegasus2avro.mxe.SystemMetadata systemMetadata;

  /**
   * Default constructor.  Note that this does not initialize fields
   * to their default values from the schema.  If that is desired then
   * one should use <code>newBuilder()</code>. 
   */
  public DataHubUpgradeHistoryEvent() {}

  /**
   * All-args constructor.
   */
  public DataHubUpgradeHistoryEvent(java.lang.String version, com.linkedin.pegasus2avro.mxe.SystemMetadata systemMetadata) {
    this.version = version;
    this.systemMetadata = systemMetadata;
  }

  public org.apache.avro.Schema getSchema() { return SCHEMA$; }
  // Used by DatumWriter.  Applications should not call. 
  public java.lang.Object get(int field$) {
    switch (field$) {
    case 0: return version;
    case 1: return systemMetadata;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }
  // Used by DatumReader.  Applications should not call. 
  @SuppressWarnings(value="unchecked")
  public void put(int field$, java.lang.Object value$) {
    switch (field$) {
    case 0: version = (java.lang.String)value$; break;
    case 1: systemMetadata = (com.linkedin.pegasus2avro.mxe.SystemMetadata)value$; break;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }

  /**
   * Gets the value of the 'version' field.
   * Version of the upgrade   */
  public java.lang.String getVersion() {
    return version;
  }

  /**
   * Sets the value of the 'version' field.
   * Version of the upgrade   * @param value the value to set.
   */
  public void setVersion(java.lang.String value) {
    this.version = value;
  }

  /**
   * Gets the value of the 'systemMetadata' field.
   * A string->string map of custom properties that one might want to attach to an event   */
  public com.linkedin.pegasus2avro.mxe.SystemMetadata getSystemMetadata() {
    return systemMetadata;
  }

  /**
   * Sets the value of the 'systemMetadata' field.
   * A string->string map of custom properties that one might want to attach to an event   * @param value the value to set.
   */
  public void setSystemMetadata(com.linkedin.pegasus2avro.mxe.SystemMetadata value) {
    this.systemMetadata = value;
  }

  /** Creates a new DataHubUpgradeHistoryEvent RecordBuilder */
  public static com.linkedin.pegasus2avro.mxe.DataHubUpgradeHistoryEvent.Builder newBuilder() {
    return new com.linkedin.pegasus2avro.mxe.DataHubUpgradeHistoryEvent.Builder();
  }
  
  /** Creates a new DataHubUpgradeHistoryEvent RecordBuilder by copying an existing Builder */
  public static com.linkedin.pegasus2avro.mxe.DataHubUpgradeHistoryEvent.Builder newBuilder(com.linkedin.pegasus2avro.mxe.DataHubUpgradeHistoryEvent.Builder other) {
    return new com.linkedin.pegasus2avro.mxe.DataHubUpgradeHistoryEvent.Builder(other);
  }
  
  /** Creates a new DataHubUpgradeHistoryEvent RecordBuilder by copying an existing DataHubUpgradeHistoryEvent instance */
  public static com.linkedin.pegasus2avro.mxe.DataHubUpgradeHistoryEvent.Builder newBuilder(com.linkedin.pegasus2avro.mxe.DataHubUpgradeHistoryEvent other) {
    return new com.linkedin.pegasus2avro.mxe.DataHubUpgradeHistoryEvent.Builder(other);
  }
  
  /**
   * RecordBuilder for DataHubUpgradeHistoryEvent instances.
   */
  public static class Builder extends org.apache.avro.specific.SpecificRecordBuilderBase<DataHubUpgradeHistoryEvent>
    implements org.apache.avro.data.RecordBuilder<DataHubUpgradeHistoryEvent> {

    private java.lang.String version;
    private com.linkedin.pegasus2avro.mxe.SystemMetadata systemMetadata;

    /** Creates a new Builder */
    private Builder() {
      super(com.linkedin.pegasus2avro.mxe.DataHubUpgradeHistoryEvent.SCHEMA$);
    }
    
    /** Creates a Builder by copying an existing Builder */
    private Builder(com.linkedin.pegasus2avro.mxe.DataHubUpgradeHistoryEvent.Builder other) {
      super(other);
      if (isValidValue(fields()[0], other.version)) {
        this.version = data().deepCopy(fields()[0].schema(), other.version);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.systemMetadata)) {
        this.systemMetadata = data().deepCopy(fields()[1].schema(), other.systemMetadata);
        fieldSetFlags()[1] = true;
      }
    }
    
    /** Creates a Builder by copying an existing DataHubUpgradeHistoryEvent instance */
    private Builder(com.linkedin.pegasus2avro.mxe.DataHubUpgradeHistoryEvent other) {
            super(com.linkedin.pegasus2avro.mxe.DataHubUpgradeHistoryEvent.SCHEMA$);
      if (isValidValue(fields()[0], other.version)) {
        this.version = data().deepCopy(fields()[0].schema(), other.version);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.systemMetadata)) {
        this.systemMetadata = data().deepCopy(fields()[1].schema(), other.systemMetadata);
        fieldSetFlags()[1] = true;
      }
    }

    /** Gets the value of the 'version' field */
    public java.lang.String getVersion() {
      return version;
    }
    
    /** Sets the value of the 'version' field */
    public com.linkedin.pegasus2avro.mxe.DataHubUpgradeHistoryEvent.Builder setVersion(java.lang.String value) {
      validate(fields()[0], value);
      this.version = value;
      fieldSetFlags()[0] = true;
      return this; 
    }
    
    /** Checks whether the 'version' field has been set */
    public boolean hasVersion() {
      return fieldSetFlags()[0];
    }
    
    /** Clears the value of the 'version' field */
    public com.linkedin.pegasus2avro.mxe.DataHubUpgradeHistoryEvent.Builder clearVersion() {
      version = null;
      fieldSetFlags()[0] = false;
      return this;
    }

    /** Gets the value of the 'systemMetadata' field */
    public com.linkedin.pegasus2avro.mxe.SystemMetadata getSystemMetadata() {
      return systemMetadata;
    }
    
    /** Sets the value of the 'systemMetadata' field */
    public com.linkedin.pegasus2avro.mxe.DataHubUpgradeHistoryEvent.Builder setSystemMetadata(com.linkedin.pegasus2avro.mxe.SystemMetadata value) {
      validate(fields()[1], value);
      this.systemMetadata = value;
      fieldSetFlags()[1] = true;
      return this; 
    }
    
    /** Checks whether the 'systemMetadata' field has been set */
    public boolean hasSystemMetadata() {
      return fieldSetFlags()[1];
    }
    
    /** Clears the value of the 'systemMetadata' field */
    public com.linkedin.pegasus2avro.mxe.DataHubUpgradeHistoryEvent.Builder clearSystemMetadata() {
      systemMetadata = null;
      fieldSetFlags()[1] = false;
      return this;
    }

    @Override
    public DataHubUpgradeHistoryEvent build() {
      try {
        DataHubUpgradeHistoryEvent record = new DataHubUpgradeHistoryEvent();
        record.version = fieldSetFlags()[0] ? this.version : (java.lang.String) defaultValue(fields()[0]);
        record.systemMetadata = fieldSetFlags()[1] ? this.systemMetadata : (com.linkedin.pegasus2avro.mxe.SystemMetadata) defaultValue(fields()[1]);
        return record;
      } catch (Exception e) {
        throw new org.apache.avro.AvroRuntimeException(e);
      }
    }
  }
}
