/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */
package com.linkedin.pegasus2avro.mxe;  
@SuppressWarnings("all")
/** Kafka event for capturing a failure to process a specific MetadataChangeEvent. */
@org.apache.avro.specific.AvroGenerated
public class FailedMetadataChangeProposal extends org.apache.avro.specific.SpecificRecordBase implements org.apache.avro.specific.SpecificRecord {
  public static final org.apache.avro.Schema SCHEMA$ = new org.apache.avro.Schema.Parser().parse("{\"type\":\"record\",\"name\":\"FailedMetadataChangeProposal\",\"namespace\":\"com.linkedin.pegasus2avro.mxe\",\"doc\":\"Kafka event for capturing a failure to process a specific MetadataChangeEvent.\",\"fields\":[{\"name\":\"auditHeader\",\"type\":[\"null\",{\"type\":\"record\",\"name\":\"KafkaAuditHeader\",\"namespace\":\"com.linkedin.events\",\"doc\":\"This header records information about the context of an event as it is emitted into kafka and is intended to be used by the kafka audit application.  For more information see go/kafkaauditheader\",\"fields\":[{\"name\":\"time\",\"type\":\"long\",\"doc\":\"The time at which the event was emitted into kafka.\",\"compliance\":[{\"policy\":\"EVENT_TIME\"}]},{\"name\":\"server\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"The fully qualified name of the host from which the event is being emitted.\",\"compliance\":\"NONE\"},{\"name\":\"instance\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"The instance on the server from which the event is being emitted. e.g. i001\",\"default\":null,\"compliance\":\"NONE\"},{\"name\":\"appName\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"The name of the application from which the event is being emitted. see go/appname\",\"compliance\":\"NONE\"},{\"name\":\"messageId\",\"type\":{\"type\":\"fixed\",\"name\":\"UUID\",\"size\":16},\"doc\":\"A unique identifier for the message\",\"compliance\":\"NONE\"},{\"name\":\"auditVersion\",\"type\":[\"null\",\"int\"],\"doc\":\"The version that is being used for auditing. In version 0, the audit trail buckets events into 10 minute audit windows based on the EventHeader timestamp. In version 1, the audit trail buckets events as follows: if the schema has an outer KafkaAuditHeader, use the outer audit header timestamp for bucketing; else if the EventHeader has an inner KafkaAuditHeader use that inner audit header's timestamp for bucketing\",\"default\":null,\"compliance\":\"NONE\"},{\"name\":\"fabricUrn\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"The fabricUrn of the host from which the event is being emitted. Fabric Urn in the format of urn:li:fabric:{fabric_name}. See go/fabric.\",\"default\":null,\"compliance\":\"NONE\"},{\"name\":\"clusterConnectionString\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"This is a String that the client uses to establish some kind of connection with the Kafka cluster. The exact format of it depends on specific versions of clients and brokers. This information could potentially identify the fabric and cluster with which the client is producing to or consuming from.\",\"default\":null,\"compliance\":\"NONE\"}]}],\"doc\":\"Kafka audit header. See go/kafkaauditheader for more info.\",\"default\":null},{\"name\":\"metadataChangeProposal\",\"type\":{\"type\":\"record\",\"name\":\"MetadataChangeProposal\",\"doc\":\"Kafka event for proposing a metadata change for an entity. A corresponding MetadataChangeLog is emitted when the change is accepted and committed, otherwise a FailedMetadataChangeProposal will be emitted instead.\",\"fields\":[{\"name\":\"auditHeader\",\"type\":[\"null\",\"com.linkedin.events.KafkaAuditHeader\"],\"doc\":\"Kafka audit header. Currently remains unused in the open source.\",\"default\":null},{\"name\":\"entityType\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"Type of the entity being written to\"},{\"name\":\"entityUrn\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"Urn of the entity being written\",\"default\":null,\"java\":{\"class\":\"com.linkedin.pegasus2avro.common.urn.Urn\"}},{\"name\":\"entityKeyAspect\",\"type\":[\"null\",{\"type\":\"record\",\"name\":\"GenericAspect\",\"doc\":\"Generic record structure for serializing an Aspect\",\"fields\":[{\"name\":\"value\",\"type\":\"bytes\",\"doc\":\"The value of the aspect, serialized as bytes.\"},{\"name\":\"contentType\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"The content type, which represents the fashion in which the aspect was serialized.\\nThe only type currently supported is application/json.\"}]}],\"doc\":\"Key aspect of the entity being written\",\"default\":null},{\"name\":\"changeType\",\"type\":{\"type\":\"enum\",\"name\":\"ChangeType\",\"namespace\":\"com.linkedin.pegasus2avro.events.metadata\",\"doc\":\"Descriptor for a change action\",\"symbols\":[\"UPSERT\",\"CREATE\",\"UPDATE\",\"DELETE\",\"PATCH\",\"RESTATE\"],\"symbolDocs\":{\"CREATE\":\"NOT SUPPORTED YET\\ninsert if not exists. otherwise fail\",\"DELETE\":\"NOT SUPPORTED YET\\ndelete action\",\"PATCH\":\"NOT SUPPORTED YET\\npatch the changes instead of full replace\",\"RESTATE\":\"Restate an aspect, eg. in a index refresh.\",\"UPDATE\":\"NOT SUPPORTED YET\\nupdate if exists. otherwise fail\",\"UPSERT\":\"insert if not exists. otherwise update\"}},\"doc\":\"Type of change being proposed\"},{\"name\":\"aspectName\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"Aspect of the entity being written to\\nNot filling this out implies that the writer wants to affect the entire entity\\nNote: This is only valid for CREATE, UPSERT, and DELETE operations.\",\"default\":null},{\"name\":\"aspect\",\"type\":[\"null\",\"GenericAspect\"],\"doc\":\"The value of the new aspect.\",\"default\":null},{\"name\":\"systemMetadata\",\"type\":[\"null\",{\"type\":\"record\",\"name\":\"SystemMetadata\",\"doc\":\"Metadata associated with each metadata change that is processed by the system\",\"fields\":[{\"name\":\"lastObserved\",\"type\":[\"long\",\"null\"],\"doc\":\"The timestamp the metadata was observed at\",\"default\":0},{\"name\":\"runId\",\"type\":[{\"type\":\"string\",\"avro.java.string\":\"String\"},\"null\"],\"doc\":\"The run id that produced the metadata. Populated in case of batch-ingestion.\",\"default\":\"no-run-id-provided\"},{\"name\":\"registryName\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"The model registry name that was used to process this event\",\"default\":null},{\"name\":\"registryVersion\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"The model registry version that was used to process this event\",\"default\":null},{\"name\":\"properties\",\"type\":[\"null\",{\"type\":\"map\",\"values\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"avro.java.string\":\"String\"}],\"doc\":\"Additional properties\",\"default\":null}]}],\"doc\":\"A string->string map of custom properties that one might want to attach to an event\",\"default\":null}]},\"doc\":\"The even that failed to be processed.\"},{\"name\":\"error\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"The error message or the stacktrace for the failure.\"}]}");
  public static org.apache.avro.Schema getClassSchema() { return SCHEMA$; }
  /** Kafka audit header. See go/kafkaauditheader for more info. */
  @Deprecated public com.linkedin.events.KafkaAuditHeader auditHeader;
  /** The even that failed to be processed. */
  @Deprecated public com.linkedin.pegasus2avro.mxe.MetadataChangeProposal metadataChangeProposal;
  /** The error message or the stacktrace for the failure. */
  @Deprecated public java.lang.String error;

  /**
   * Default constructor.  Note that this does not initialize fields
   * to their default values from the schema.  If that is desired then
   * one should use <code>newBuilder()</code>. 
   */
  public FailedMetadataChangeProposal() {}

  /**
   * All-args constructor.
   */
  public FailedMetadataChangeProposal(com.linkedin.events.KafkaAuditHeader auditHeader, com.linkedin.pegasus2avro.mxe.MetadataChangeProposal metadataChangeProposal, java.lang.String error) {
    this.auditHeader = auditHeader;
    this.metadataChangeProposal = metadataChangeProposal;
    this.error = error;
  }

  public org.apache.avro.Schema getSchema() { return SCHEMA$; }
  // Used by DatumWriter.  Applications should not call. 
  public java.lang.Object get(int field$) {
    switch (field$) {
    case 0: return auditHeader;
    case 1: return metadataChangeProposal;
    case 2: return error;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }
  // Used by DatumReader.  Applications should not call. 
  @SuppressWarnings(value="unchecked")
  public void put(int field$, java.lang.Object value$) {
    switch (field$) {
    case 0: auditHeader = (com.linkedin.events.KafkaAuditHeader)value$; break;
    case 1: metadataChangeProposal = (com.linkedin.pegasus2avro.mxe.MetadataChangeProposal)value$; break;
    case 2: error = (java.lang.String)value$; break;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }

  /**
   * Gets the value of the 'auditHeader' field.
   * Kafka audit header. See go/kafkaauditheader for more info.   */
  public com.linkedin.events.KafkaAuditHeader getAuditHeader() {
    return auditHeader;
  }

  /**
   * Sets the value of the 'auditHeader' field.
   * Kafka audit header. See go/kafkaauditheader for more info.   * @param value the value to set.
   */
  public void setAuditHeader(com.linkedin.events.KafkaAuditHeader value) {
    this.auditHeader = value;
  }

  /**
   * Gets the value of the 'metadataChangeProposal' field.
   * The even that failed to be processed.   */
  public com.linkedin.pegasus2avro.mxe.MetadataChangeProposal getMetadataChangeProposal() {
    return metadataChangeProposal;
  }

  /**
   * Sets the value of the 'metadataChangeProposal' field.
   * The even that failed to be processed.   * @param value the value to set.
   */
  public void setMetadataChangeProposal(com.linkedin.pegasus2avro.mxe.MetadataChangeProposal value) {
    this.metadataChangeProposal = value;
  }

  /**
   * Gets the value of the 'error' field.
   * The error message or the stacktrace for the failure.   */
  public java.lang.String getError() {
    return error;
  }

  /**
   * Sets the value of the 'error' field.
   * The error message or the stacktrace for the failure.   * @param value the value to set.
   */
  public void setError(java.lang.String value) {
    this.error = value;
  }

  /** Creates a new FailedMetadataChangeProposal RecordBuilder */
  public static com.linkedin.pegasus2avro.mxe.FailedMetadataChangeProposal.Builder newBuilder() {
    return new com.linkedin.pegasus2avro.mxe.FailedMetadataChangeProposal.Builder();
  }
  
  /** Creates a new FailedMetadataChangeProposal RecordBuilder by copying an existing Builder */
  public static com.linkedin.pegasus2avro.mxe.FailedMetadataChangeProposal.Builder newBuilder(com.linkedin.pegasus2avro.mxe.FailedMetadataChangeProposal.Builder other) {
    return new com.linkedin.pegasus2avro.mxe.FailedMetadataChangeProposal.Builder(other);
  }
  
  /** Creates a new FailedMetadataChangeProposal RecordBuilder by copying an existing FailedMetadataChangeProposal instance */
  public static com.linkedin.pegasus2avro.mxe.FailedMetadataChangeProposal.Builder newBuilder(com.linkedin.pegasus2avro.mxe.FailedMetadataChangeProposal other) {
    return new com.linkedin.pegasus2avro.mxe.FailedMetadataChangeProposal.Builder(other);
  }
  
  /**
   * RecordBuilder for FailedMetadataChangeProposal instances.
   */
  public static class Builder extends org.apache.avro.specific.SpecificRecordBuilderBase<FailedMetadataChangeProposal>
    implements org.apache.avro.data.RecordBuilder<FailedMetadataChangeProposal> {

    private com.linkedin.events.KafkaAuditHeader auditHeader;
    private com.linkedin.pegasus2avro.mxe.MetadataChangeProposal metadataChangeProposal;
    private java.lang.String error;

    /** Creates a new Builder */
    private Builder() {
      super(com.linkedin.pegasus2avro.mxe.FailedMetadataChangeProposal.SCHEMA$);
    }
    
    /** Creates a Builder by copying an existing Builder */
    private Builder(com.linkedin.pegasus2avro.mxe.FailedMetadataChangeProposal.Builder other) {
      super(other);
      if (isValidValue(fields()[0], other.auditHeader)) {
        this.auditHeader = data().deepCopy(fields()[0].schema(), other.auditHeader);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.metadataChangeProposal)) {
        this.metadataChangeProposal = data().deepCopy(fields()[1].schema(), other.metadataChangeProposal);
        fieldSetFlags()[1] = true;
      }
      if (isValidValue(fields()[2], other.error)) {
        this.error = data().deepCopy(fields()[2].schema(), other.error);
        fieldSetFlags()[2] = true;
      }
    }
    
    /** Creates a Builder by copying an existing FailedMetadataChangeProposal instance */
    private Builder(com.linkedin.pegasus2avro.mxe.FailedMetadataChangeProposal other) {
            super(com.linkedin.pegasus2avro.mxe.FailedMetadataChangeProposal.SCHEMA$);
      if (isValidValue(fields()[0], other.auditHeader)) {
        this.auditHeader = data().deepCopy(fields()[0].schema(), other.auditHeader);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.metadataChangeProposal)) {
        this.metadataChangeProposal = data().deepCopy(fields()[1].schema(), other.metadataChangeProposal);
        fieldSetFlags()[1] = true;
      }
      if (isValidValue(fields()[2], other.error)) {
        this.error = data().deepCopy(fields()[2].schema(), other.error);
        fieldSetFlags()[2] = true;
      }
    }

    /** Gets the value of the 'auditHeader' field */
    public com.linkedin.events.KafkaAuditHeader getAuditHeader() {
      return auditHeader;
    }
    
    /** Sets the value of the 'auditHeader' field */
    public com.linkedin.pegasus2avro.mxe.FailedMetadataChangeProposal.Builder setAuditHeader(com.linkedin.events.KafkaAuditHeader value) {
      validate(fields()[0], value);
      this.auditHeader = value;
      fieldSetFlags()[0] = true;
      return this; 
    }
    
    /** Checks whether the 'auditHeader' field has been set */
    public boolean hasAuditHeader() {
      return fieldSetFlags()[0];
    }
    
    /** Clears the value of the 'auditHeader' field */
    public com.linkedin.pegasus2avro.mxe.FailedMetadataChangeProposal.Builder clearAuditHeader() {
      auditHeader = null;
      fieldSetFlags()[0] = false;
      return this;
    }

    /** Gets the value of the 'metadataChangeProposal' field */
    public com.linkedin.pegasus2avro.mxe.MetadataChangeProposal getMetadataChangeProposal() {
      return metadataChangeProposal;
    }
    
    /** Sets the value of the 'metadataChangeProposal' field */
    public com.linkedin.pegasus2avro.mxe.FailedMetadataChangeProposal.Builder setMetadataChangeProposal(com.linkedin.pegasus2avro.mxe.MetadataChangeProposal value) {
      validate(fields()[1], value);
      this.metadataChangeProposal = value;
      fieldSetFlags()[1] = true;
      return this; 
    }
    
    /** Checks whether the 'metadataChangeProposal' field has been set */
    public boolean hasMetadataChangeProposal() {
      return fieldSetFlags()[1];
    }
    
    /** Clears the value of the 'metadataChangeProposal' field */
    public com.linkedin.pegasus2avro.mxe.FailedMetadataChangeProposal.Builder clearMetadataChangeProposal() {
      metadataChangeProposal = null;
      fieldSetFlags()[1] = false;
      return this;
    }

    /** Gets the value of the 'error' field */
    public java.lang.String getError() {
      return error;
    }
    
    /** Sets the value of the 'error' field */
    public com.linkedin.pegasus2avro.mxe.FailedMetadataChangeProposal.Builder setError(java.lang.String value) {
      validate(fields()[2], value);
      this.error = value;
      fieldSetFlags()[2] = true;
      return this; 
    }
    
    /** Checks whether the 'error' field has been set */
    public boolean hasError() {
      return fieldSetFlags()[2];
    }
    
    /** Clears the value of the 'error' field */
    public com.linkedin.pegasus2avro.mxe.FailedMetadataChangeProposal.Builder clearError() {
      error = null;
      fieldSetFlags()[2] = false;
      return this;
    }

    @Override
    public FailedMetadataChangeProposal build() {
      try {
        FailedMetadataChangeProposal record = new FailedMetadataChangeProposal();
        record.auditHeader = fieldSetFlags()[0] ? this.auditHeader : (com.linkedin.events.KafkaAuditHeader) defaultValue(fields()[0]);
        record.metadataChangeProposal = fieldSetFlags()[1] ? this.metadataChangeProposal : (com.linkedin.pegasus2avro.mxe.MetadataChangeProposal) defaultValue(fields()[1]);
        record.error = fieldSetFlags()[2] ? this.error : (java.lang.String) defaultValue(fields()[2]);
        return record;
      } catch (Exception e) {
        throw new org.apache.avro.AvroRuntimeException(e);
      }
    }
  }
}
