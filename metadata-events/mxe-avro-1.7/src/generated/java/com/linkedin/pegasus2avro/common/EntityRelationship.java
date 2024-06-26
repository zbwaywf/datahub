/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */
package com.linkedin.pegasus2avro.common;  
@SuppressWarnings("all")
/** Downstream lineage information about a dataset including the source reporting the lineage */
@org.apache.avro.specific.AvroGenerated
public class EntityRelationship extends org.apache.avro.specific.SpecificRecordBase implements org.apache.avro.specific.SpecificRecord {
  public static final org.apache.avro.Schema SCHEMA$ = new org.apache.avro.Schema.Parser().parse("{\"type\":\"record\",\"name\":\"EntityRelationship\",\"namespace\":\"com.linkedin.pegasus2avro.common\",\"doc\":\"Downstream lineage information about a dataset including the source reporting the lineage\",\"fields\":[{\"name\":\"created\",\"type\":[\"null\",{\"type\":\"record\",\"name\":\"AuditStamp\",\"doc\":\"Data captured on a resource/association/sub-resource level giving insight into when that resource/association/sub-resource moved into a particular lifecycle stage, and who acted to move it into that specific lifecycle stage.\",\"fields\":[{\"name\":\"time\",\"type\":\"long\",\"doc\":\"When did the resource/association/sub-resource move into the specific lifecycle stage represented by this AuditEvent.\"},{\"name\":\"actor\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"The entity (e.g. a member URN) which will be credited for moving the resource/association/sub-resource into the specific lifecycle stage. It is also the one used to authorize the change.\",\"java\":{\"class\":\"com.linkedin.pegasus2avro.common.urn.Urn\"}},{\"name\":\"impersonator\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"The entity (e.g. a service URN) which performs the change on behalf of the Actor and must be authorized to act as the Actor.\",\"default\":null,\"java\":{\"class\":\"com.linkedin.pegasus2avro.common.urn.Urn\"}},{\"name\":\"message\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"Additional context around how DataHub was informed of the particular change. For example: was the change created by an automated process, or manually.\",\"default\":null}]}],\"doc\":\"Audit stamp containing who reported the lineage and when\",\"default\":null},{\"name\":\"entity\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"The downstream dataset the lineage points to\",\"java\":{\"class\":\"com.linkedin.pegasus2avro.common.urn.Urn\"}},{\"name\":\"type\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"The type of the relationship\"}]}");
  public static org.apache.avro.Schema getClassSchema() { return SCHEMA$; }
  /** Audit stamp containing who reported the lineage and when */
  @Deprecated public com.linkedin.pegasus2avro.common.AuditStamp created;
  /** The downstream dataset the lineage points to */
  @Deprecated public java.lang.String entity;
  /** The type of the relationship */
  @Deprecated public java.lang.String type;

  /**
   * Default constructor.  Note that this does not initialize fields
   * to their default values from the schema.  If that is desired then
   * one should use <code>newBuilder()</code>. 
   */
  public EntityRelationship() {}

  /**
   * All-args constructor.
   */
  public EntityRelationship(com.linkedin.pegasus2avro.common.AuditStamp created, java.lang.String entity, java.lang.String type) {
    this.created = created;
    this.entity = entity;
    this.type = type;
  }

  public org.apache.avro.Schema getSchema() { return SCHEMA$; }
  // Used by DatumWriter.  Applications should not call. 
  public java.lang.Object get(int field$) {
    switch (field$) {
    case 0: return created;
    case 1: return entity;
    case 2: return type;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }
  // Used by DatumReader.  Applications should not call. 
  @SuppressWarnings(value="unchecked")
  public void put(int field$, java.lang.Object value$) {
    switch (field$) {
    case 0: created = (com.linkedin.pegasus2avro.common.AuditStamp)value$; break;
    case 1: entity = (java.lang.String)value$; break;
    case 2: type = (java.lang.String)value$; break;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }

  /**
   * Gets the value of the 'created' field.
   * Audit stamp containing who reported the lineage and when   */
  public com.linkedin.pegasus2avro.common.AuditStamp getCreated() {
    return created;
  }

  /**
   * Sets the value of the 'created' field.
   * Audit stamp containing who reported the lineage and when   * @param value the value to set.
   */
  public void setCreated(com.linkedin.pegasus2avro.common.AuditStamp value) {
    this.created = value;
  }

  /**
   * Gets the value of the 'entity' field.
   * The downstream dataset the lineage points to   */
  public java.lang.String getEntity() {
    return entity;
  }

  /**
   * Sets the value of the 'entity' field.
   * The downstream dataset the lineage points to   * @param value the value to set.
   */
  public void setEntity(java.lang.String value) {
    this.entity = value;
  }

  /**
   * Gets the value of the 'type' field.
   * The type of the relationship   */
  public java.lang.String getType() {
    return type;
  }

  /**
   * Sets the value of the 'type' field.
   * The type of the relationship   * @param value the value to set.
   */
  public void setType(java.lang.String value) {
    this.type = value;
  }

  /** Creates a new EntityRelationship RecordBuilder */
  public static com.linkedin.pegasus2avro.common.EntityRelationship.Builder newBuilder() {
    return new com.linkedin.pegasus2avro.common.EntityRelationship.Builder();
  }
  
  /** Creates a new EntityRelationship RecordBuilder by copying an existing Builder */
  public static com.linkedin.pegasus2avro.common.EntityRelationship.Builder newBuilder(com.linkedin.pegasus2avro.common.EntityRelationship.Builder other) {
    return new com.linkedin.pegasus2avro.common.EntityRelationship.Builder(other);
  }
  
  /** Creates a new EntityRelationship RecordBuilder by copying an existing EntityRelationship instance */
  public static com.linkedin.pegasus2avro.common.EntityRelationship.Builder newBuilder(com.linkedin.pegasus2avro.common.EntityRelationship other) {
    return new com.linkedin.pegasus2avro.common.EntityRelationship.Builder(other);
  }
  
  /**
   * RecordBuilder for EntityRelationship instances.
   */
  public static class Builder extends org.apache.avro.specific.SpecificRecordBuilderBase<EntityRelationship>
    implements org.apache.avro.data.RecordBuilder<EntityRelationship> {

    private com.linkedin.pegasus2avro.common.AuditStamp created;
    private java.lang.String entity;
    private java.lang.String type;

    /** Creates a new Builder */
    private Builder() {
      super(com.linkedin.pegasus2avro.common.EntityRelationship.SCHEMA$);
    }
    
    /** Creates a Builder by copying an existing Builder */
    private Builder(com.linkedin.pegasus2avro.common.EntityRelationship.Builder other) {
      super(other);
      if (isValidValue(fields()[0], other.created)) {
        this.created = data().deepCopy(fields()[0].schema(), other.created);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.entity)) {
        this.entity = data().deepCopy(fields()[1].schema(), other.entity);
        fieldSetFlags()[1] = true;
      }
      if (isValidValue(fields()[2], other.type)) {
        this.type = data().deepCopy(fields()[2].schema(), other.type);
        fieldSetFlags()[2] = true;
      }
    }
    
    /** Creates a Builder by copying an existing EntityRelationship instance */
    private Builder(com.linkedin.pegasus2avro.common.EntityRelationship other) {
            super(com.linkedin.pegasus2avro.common.EntityRelationship.SCHEMA$);
      if (isValidValue(fields()[0], other.created)) {
        this.created = data().deepCopy(fields()[0].schema(), other.created);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.entity)) {
        this.entity = data().deepCopy(fields()[1].schema(), other.entity);
        fieldSetFlags()[1] = true;
      }
      if (isValidValue(fields()[2], other.type)) {
        this.type = data().deepCopy(fields()[2].schema(), other.type);
        fieldSetFlags()[2] = true;
      }
    }

    /** Gets the value of the 'created' field */
    public com.linkedin.pegasus2avro.common.AuditStamp getCreated() {
      return created;
    }
    
    /** Sets the value of the 'created' field */
    public com.linkedin.pegasus2avro.common.EntityRelationship.Builder setCreated(com.linkedin.pegasus2avro.common.AuditStamp value) {
      validate(fields()[0], value);
      this.created = value;
      fieldSetFlags()[0] = true;
      return this; 
    }
    
    /** Checks whether the 'created' field has been set */
    public boolean hasCreated() {
      return fieldSetFlags()[0];
    }
    
    /** Clears the value of the 'created' field */
    public com.linkedin.pegasus2avro.common.EntityRelationship.Builder clearCreated() {
      created = null;
      fieldSetFlags()[0] = false;
      return this;
    }

    /** Gets the value of the 'entity' field */
    public java.lang.String getEntity() {
      return entity;
    }
    
    /** Sets the value of the 'entity' field */
    public com.linkedin.pegasus2avro.common.EntityRelationship.Builder setEntity(java.lang.String value) {
      validate(fields()[1], value);
      this.entity = value;
      fieldSetFlags()[1] = true;
      return this; 
    }
    
    /** Checks whether the 'entity' field has been set */
    public boolean hasEntity() {
      return fieldSetFlags()[1];
    }
    
    /** Clears the value of the 'entity' field */
    public com.linkedin.pegasus2avro.common.EntityRelationship.Builder clearEntity() {
      entity = null;
      fieldSetFlags()[1] = false;
      return this;
    }

    /** Gets the value of the 'type' field */
    public java.lang.String getType() {
      return type;
    }
    
    /** Sets the value of the 'type' field */
    public com.linkedin.pegasus2avro.common.EntityRelationship.Builder setType(java.lang.String value) {
      validate(fields()[2], value);
      this.type = value;
      fieldSetFlags()[2] = true;
      return this; 
    }
    
    /** Checks whether the 'type' field has been set */
    public boolean hasType() {
      return fieldSetFlags()[2];
    }
    
    /** Clears the value of the 'type' field */
    public com.linkedin.pegasus2avro.common.EntityRelationship.Builder clearType() {
      type = null;
      fieldSetFlags()[2] = false;
      return this;
    }

    @Override
    public EntityRelationship build() {
      try {
        EntityRelationship record = new EntityRelationship();
        record.created = fieldSetFlags()[0] ? this.created : (com.linkedin.pegasus2avro.common.AuditStamp) defaultValue(fields()[0]);
        record.entity = fieldSetFlags()[1] ? this.entity : (java.lang.String) defaultValue(fields()[1]);
        record.type = fieldSetFlags()[2] ? this.type : (java.lang.String) defaultValue(fields()[2]);
        return record;
      } catch (Exception e) {
        throw new org.apache.avro.AvroRuntimeException(e);
      }
    }
  }
}
