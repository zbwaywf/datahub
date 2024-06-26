/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */
package com.linkedin.pegasus2avro.entity;  
@SuppressWarnings("all")
/** A DataHub 'entity', which is comprised of a set of latest aspects present for the aspect. */
@org.apache.avro.specific.AvroGenerated
public class EntityResponse extends org.apache.avro.specific.SpecificRecordBase implements org.apache.avro.specific.SpecificRecord {
  public static final org.apache.avro.Schema SCHEMA$ = new org.apache.avro.Schema.Parser().parse("{\"type\":\"record\",\"name\":\"EntityResponse\",\"namespace\":\"com.linkedin.pegasus2avro.entity\",\"doc\":\"A DataHub 'entity', which is comprised of a set of latest aspects present for the aspect.\",\"fields\":[{\"name\":\"entityName\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"The entity name\"},{\"name\":\"urn\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"The entity urn\",\"java\":{\"class\":\"com.linkedin.pegasus2avro.common.urn.Urn\"}},{\"name\":\"aspects\",\"type\":{\"type\":\"map\",\"values\":{\"type\":\"record\",\"name\":\"EnvelopedAspect\",\"doc\":\"An aspect, along with the metadata about it.\\nCurrently, an aspect can be either of type 'timestamp' or 'versioned'.\",\"fields\":[{\"name\":\"name\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"The name of the aspect\"},{\"name\":\"type\",\"type\":{\"type\":\"enum\",\"name\":\"AspectType\",\"doc\":\"The type of a DataHub aspect\",\"symbols\":[\"VERSIONED\",\"TIMESERIES\"],\"symbolDocs\":{\"TIMESERIES\":\"Designates an aspect that represents a point-in-time data point\",\"VERSIONED\":\"Designates an aspect that has a monotonically increasing version number\"}},\"doc\":\"The type of the aspect, either timeseries or versioned\"},{\"name\":\"version\",\"type\":[\"null\",\"long\"],\"doc\":\"The version of the aspect, only populated if type is 'VERSIONED'\",\"default\":null},{\"name\":\"timestamp\",\"type\":[\"null\",\"long\"],\"doc\":\"The timestamp of the aspect, only populated if type is 'TIMESTAMP'\",\"default\":null},{\"name\":\"value\",\"type\":{\"type\":\"record\",\"name\":\"Aspect\",\"doc\":\"Placeholder PDL record to store the aspect in the response. By using this place-holder, metadata-service can return\\nany type of aspect without having to define a single union class\",\"fields\":[]},\"doc\":\"The raw value of the aspect\"},{\"name\":\"created\",\"type\":{\"type\":\"record\",\"name\":\"AuditStamp\",\"namespace\":\"com.linkedin.pegasus2avro.common\",\"doc\":\"Data captured on a resource/association/sub-resource level giving insight into when that resource/association/sub-resource moved into a particular lifecycle stage, and who acted to move it into that specific lifecycle stage.\",\"fields\":[{\"name\":\"time\",\"type\":\"long\",\"doc\":\"When did the resource/association/sub-resource move into the specific lifecycle stage represented by this AuditEvent.\"},{\"name\":\"actor\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"The entity (e.g. a member URN) which will be credited for moving the resource/association/sub-resource into the specific lifecycle stage. It is also the one used to authorize the change.\",\"java\":{\"class\":\"com.linkedin.pegasus2avro.common.urn.Urn\"}},{\"name\":\"impersonator\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"The entity (e.g. a service URN) which performs the change on behalf of the Actor and must be authorized to act as the Actor.\",\"default\":null,\"java\":{\"class\":\"com.linkedin.pegasus2avro.common.urn.Urn\"}},{\"name\":\"message\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"Additional context around how DataHub was informed of the particular change. For example: was the change created by an automated process, or manually.\",\"default\":null}]},\"doc\":\"The audit stamp detailing who the aspect was created by and when\"},{\"name\":\"systemMetadata\",\"type\":[\"null\",{\"type\":\"record\",\"name\":\"SystemMetadata\",\"namespace\":\"com.linkedin.pegasus2avro.mxe\",\"doc\":\"Metadata associated with each metadata change that is processed by the system\",\"fields\":[{\"name\":\"lastObserved\",\"type\":[\"long\",\"null\"],\"doc\":\"The timestamp the metadata was observed at\",\"default\":0},{\"name\":\"runId\",\"type\":[{\"type\":\"string\",\"avro.java.string\":\"String\"},\"null\"],\"doc\":\"The run id that produced the metadata. Populated in case of batch-ingestion.\",\"default\":\"no-run-id-provided\"},{\"name\":\"registryName\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"The model registry name that was used to process this event\",\"default\":null},{\"name\":\"registryVersion\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"The model registry version that was used to process this event\",\"default\":null},{\"name\":\"properties\",\"type\":[\"null\",{\"type\":\"map\",\"values\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"avro.java.string\":\"String\"}],\"doc\":\"Additional properties\",\"default\":null}]}],\"doc\":\"The system metadata for this aspect\",\"default\":null}]},\"avro.java.string\":\"String\"},\"doc\":\"A map of aspect name to aspect\"}]}");
  public static org.apache.avro.Schema getClassSchema() { return SCHEMA$; }
  /** The entity name */
  @Deprecated public java.lang.String entityName;
  /** The entity urn */
  @Deprecated public java.lang.String urn;
  /** A map of aspect name to aspect */
  @Deprecated public java.util.Map<java.lang.String,com.linkedin.pegasus2avro.entity.EnvelopedAspect> aspects;

  /**
   * Default constructor.  Note that this does not initialize fields
   * to their default values from the schema.  If that is desired then
   * one should use <code>newBuilder()</code>. 
   */
  public EntityResponse() {}

  /**
   * All-args constructor.
   */
  public EntityResponse(java.lang.String entityName, java.lang.String urn, java.util.Map<java.lang.String,com.linkedin.pegasus2avro.entity.EnvelopedAspect> aspects) {
    this.entityName = entityName;
    this.urn = urn;
    this.aspects = aspects;
  }

  public org.apache.avro.Schema getSchema() { return SCHEMA$; }
  // Used by DatumWriter.  Applications should not call. 
  public java.lang.Object get(int field$) {
    switch (field$) {
    case 0: return entityName;
    case 1: return urn;
    case 2: return aspects;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }
  // Used by DatumReader.  Applications should not call. 
  @SuppressWarnings(value="unchecked")
  public void put(int field$, java.lang.Object value$) {
    switch (field$) {
    case 0: entityName = (java.lang.String)value$; break;
    case 1: urn = (java.lang.String)value$; break;
    case 2: aspects = (java.util.Map<java.lang.String,com.linkedin.pegasus2avro.entity.EnvelopedAspect>)value$; break;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }

  /**
   * Gets the value of the 'entityName' field.
   * The entity name   */
  public java.lang.String getEntityName() {
    return entityName;
  }

  /**
   * Sets the value of the 'entityName' field.
   * The entity name   * @param value the value to set.
   */
  public void setEntityName(java.lang.String value) {
    this.entityName = value;
  }

  /**
   * Gets the value of the 'urn' field.
   * The entity urn   */
  public java.lang.String getUrn() {
    return urn;
  }

  /**
   * Sets the value of the 'urn' field.
   * The entity urn   * @param value the value to set.
   */
  public void setUrn(java.lang.String value) {
    this.urn = value;
  }

  /**
   * Gets the value of the 'aspects' field.
   * A map of aspect name to aspect   */
  public java.util.Map<java.lang.String,com.linkedin.pegasus2avro.entity.EnvelopedAspect> getAspects() {
    return aspects;
  }

  /**
   * Sets the value of the 'aspects' field.
   * A map of aspect name to aspect   * @param value the value to set.
   */
  public void setAspects(java.util.Map<java.lang.String,com.linkedin.pegasus2avro.entity.EnvelopedAspect> value) {
    this.aspects = value;
  }

  /** Creates a new EntityResponse RecordBuilder */
  public static com.linkedin.pegasus2avro.entity.EntityResponse.Builder newBuilder() {
    return new com.linkedin.pegasus2avro.entity.EntityResponse.Builder();
  }
  
  /** Creates a new EntityResponse RecordBuilder by copying an existing Builder */
  public static com.linkedin.pegasus2avro.entity.EntityResponse.Builder newBuilder(com.linkedin.pegasus2avro.entity.EntityResponse.Builder other) {
    return new com.linkedin.pegasus2avro.entity.EntityResponse.Builder(other);
  }
  
  /** Creates a new EntityResponse RecordBuilder by copying an existing EntityResponse instance */
  public static com.linkedin.pegasus2avro.entity.EntityResponse.Builder newBuilder(com.linkedin.pegasus2avro.entity.EntityResponse other) {
    return new com.linkedin.pegasus2avro.entity.EntityResponse.Builder(other);
  }
  
  /**
   * RecordBuilder for EntityResponse instances.
   */
  public static class Builder extends org.apache.avro.specific.SpecificRecordBuilderBase<EntityResponse>
    implements org.apache.avro.data.RecordBuilder<EntityResponse> {

    private java.lang.String entityName;
    private java.lang.String urn;
    private java.util.Map<java.lang.String,com.linkedin.pegasus2avro.entity.EnvelopedAspect> aspects;

    /** Creates a new Builder */
    private Builder() {
      super(com.linkedin.pegasus2avro.entity.EntityResponse.SCHEMA$);
    }
    
    /** Creates a Builder by copying an existing Builder */
    private Builder(com.linkedin.pegasus2avro.entity.EntityResponse.Builder other) {
      super(other);
      if (isValidValue(fields()[0], other.entityName)) {
        this.entityName = data().deepCopy(fields()[0].schema(), other.entityName);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.urn)) {
        this.urn = data().deepCopy(fields()[1].schema(), other.urn);
        fieldSetFlags()[1] = true;
      }
      if (isValidValue(fields()[2], other.aspects)) {
        this.aspects = data().deepCopy(fields()[2].schema(), other.aspects);
        fieldSetFlags()[2] = true;
      }
    }
    
    /** Creates a Builder by copying an existing EntityResponse instance */
    private Builder(com.linkedin.pegasus2avro.entity.EntityResponse other) {
            super(com.linkedin.pegasus2avro.entity.EntityResponse.SCHEMA$);
      if (isValidValue(fields()[0], other.entityName)) {
        this.entityName = data().deepCopy(fields()[0].schema(), other.entityName);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.urn)) {
        this.urn = data().deepCopy(fields()[1].schema(), other.urn);
        fieldSetFlags()[1] = true;
      }
      if (isValidValue(fields()[2], other.aspects)) {
        this.aspects = data().deepCopy(fields()[2].schema(), other.aspects);
        fieldSetFlags()[2] = true;
      }
    }

    /** Gets the value of the 'entityName' field */
    public java.lang.String getEntityName() {
      return entityName;
    }
    
    /** Sets the value of the 'entityName' field */
    public com.linkedin.pegasus2avro.entity.EntityResponse.Builder setEntityName(java.lang.String value) {
      validate(fields()[0], value);
      this.entityName = value;
      fieldSetFlags()[0] = true;
      return this; 
    }
    
    /** Checks whether the 'entityName' field has been set */
    public boolean hasEntityName() {
      return fieldSetFlags()[0];
    }
    
    /** Clears the value of the 'entityName' field */
    public com.linkedin.pegasus2avro.entity.EntityResponse.Builder clearEntityName() {
      entityName = null;
      fieldSetFlags()[0] = false;
      return this;
    }

    /** Gets the value of the 'urn' field */
    public java.lang.String getUrn() {
      return urn;
    }
    
    /** Sets the value of the 'urn' field */
    public com.linkedin.pegasus2avro.entity.EntityResponse.Builder setUrn(java.lang.String value) {
      validate(fields()[1], value);
      this.urn = value;
      fieldSetFlags()[1] = true;
      return this; 
    }
    
    /** Checks whether the 'urn' field has been set */
    public boolean hasUrn() {
      return fieldSetFlags()[1];
    }
    
    /** Clears the value of the 'urn' field */
    public com.linkedin.pegasus2avro.entity.EntityResponse.Builder clearUrn() {
      urn = null;
      fieldSetFlags()[1] = false;
      return this;
    }

    /** Gets the value of the 'aspects' field */
    public java.util.Map<java.lang.String,com.linkedin.pegasus2avro.entity.EnvelopedAspect> getAspects() {
      return aspects;
    }
    
    /** Sets the value of the 'aspects' field */
    public com.linkedin.pegasus2avro.entity.EntityResponse.Builder setAspects(java.util.Map<java.lang.String,com.linkedin.pegasus2avro.entity.EnvelopedAspect> value) {
      validate(fields()[2], value);
      this.aspects = value;
      fieldSetFlags()[2] = true;
      return this; 
    }
    
    /** Checks whether the 'aspects' field has been set */
    public boolean hasAspects() {
      return fieldSetFlags()[2];
    }
    
    /** Clears the value of the 'aspects' field */
    public com.linkedin.pegasus2avro.entity.EntityResponse.Builder clearAspects() {
      aspects = null;
      fieldSetFlags()[2] = false;
      return this;
    }

    @Override
    public EntityResponse build() {
      try {
        EntityResponse record = new EntityResponse();
        record.entityName = fieldSetFlags()[0] ? this.entityName : (java.lang.String) defaultValue(fields()[0]);
        record.urn = fieldSetFlags()[1] ? this.urn : (java.lang.String) defaultValue(fields()[1]);
        record.aspects = fieldSetFlags()[2] ? this.aspects : (java.util.Map<java.lang.String,com.linkedin.pegasus2avro.entity.EnvelopedAspect>) defaultValue(fields()[2]);
        return record;
      } catch (Exception e) {
        throw new org.apache.avro.AvroRuntimeException(e);
      }
    }
  }
}
