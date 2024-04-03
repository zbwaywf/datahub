/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */
package com.linkedin.pegasus2avro.schema;  
@SuppressWarnings("all")
/** Key to retrieve schema metadata. */
@org.apache.avro.specific.AvroGenerated
public class SchemaMetadataKey extends org.apache.avro.specific.SpecificRecordBase implements org.apache.avro.specific.SpecificRecord {
  public static final org.apache.avro.Schema SCHEMA$ = new org.apache.avro.Schema.Parser().parse("{\"type\":\"record\",\"name\":\"SchemaMetadataKey\",\"namespace\":\"com.linkedin.pegasus2avro.schema\",\"doc\":\"Key to retrieve schema metadata.\",\"fields\":[{\"name\":\"schemaName\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"Schema name e.g. PageViewEvent, identity.Profile, ams.account_management_tracking\",\"validate\":{\"strlen\":{\"max\":500,\"min\":1}}},{\"name\":\"platform\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"Standardized platform urn where schema is defined. The data platform Urn (urn:li:platform:{platform_name})\",\"java\":{\"class\":\"com.linkedin.pegasus2avro.common.urn.DataPlatformUrn\"}},{\"name\":\"version\",\"type\":\"long\",\"doc\":\"Every change to SchemaMetadata in the resource results in a new version. Version is server assigned. This version is differ from platform native schema version.\"}]}");
  public static org.apache.avro.Schema getClassSchema() { return SCHEMA$; }
  /** Schema name e.g. PageViewEvent, identity.Profile, ams.account_management_tracking */
  @Deprecated public java.lang.String schemaName;
  /** Standardized platform urn where schema is defined. The data platform Urn (urn:li:platform:{platform_name}) */
  @Deprecated public java.lang.String platform;
  /** Every change to SchemaMetadata in the resource results in a new version. Version is server assigned. This version is differ from platform native schema version. */
  @Deprecated public long version;

  /**
   * Default constructor.  Note that this does not initialize fields
   * to their default values from the schema.  If that is desired then
   * one should use <code>newBuilder()</code>. 
   */
  public SchemaMetadataKey() {}

  /**
   * All-args constructor.
   */
  public SchemaMetadataKey(java.lang.String schemaName, java.lang.String platform, java.lang.Long version) {
    this.schemaName = schemaName;
    this.platform = platform;
    this.version = version;
  }

  public org.apache.avro.Schema getSchema() { return SCHEMA$; }
  // Used by DatumWriter.  Applications should not call. 
  public java.lang.Object get(int field$) {
    switch (field$) {
    case 0: return schemaName;
    case 1: return platform;
    case 2: return version;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }
  // Used by DatumReader.  Applications should not call. 
  @SuppressWarnings(value="unchecked")
  public void put(int field$, java.lang.Object value$) {
    switch (field$) {
    case 0: schemaName = (java.lang.String)value$; break;
    case 1: platform = (java.lang.String)value$; break;
    case 2: version = (java.lang.Long)value$; break;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }

  /**
   * Gets the value of the 'schemaName' field.
   * Schema name e.g. PageViewEvent, identity.Profile, ams.account_management_tracking   */
  public java.lang.String getSchemaName() {
    return schemaName;
  }

  /**
   * Sets the value of the 'schemaName' field.
   * Schema name e.g. PageViewEvent, identity.Profile, ams.account_management_tracking   * @param value the value to set.
   */
  public void setSchemaName(java.lang.String value) {
    this.schemaName = value;
  }

  /**
   * Gets the value of the 'platform' field.
   * Standardized platform urn where schema is defined. The data platform Urn (urn:li:platform:{platform_name})   */
  public java.lang.String getPlatform() {
    return platform;
  }

  /**
   * Sets the value of the 'platform' field.
   * Standardized platform urn where schema is defined. The data platform Urn (urn:li:platform:{platform_name})   * @param value the value to set.
   */
  public void setPlatform(java.lang.String value) {
    this.platform = value;
  }

  /**
   * Gets the value of the 'version' field.
   * Every change to SchemaMetadata in the resource results in a new version. Version is server assigned. This version is differ from platform native schema version.   */
  public java.lang.Long getVersion() {
    return version;
  }

  /**
   * Sets the value of the 'version' field.
   * Every change to SchemaMetadata in the resource results in a new version. Version is server assigned. This version is differ from platform native schema version.   * @param value the value to set.
   */
  public void setVersion(java.lang.Long value) {
    this.version = value;
  }

  /** Creates a new SchemaMetadataKey RecordBuilder */
  public static com.linkedin.pegasus2avro.schema.SchemaMetadataKey.Builder newBuilder() {
    return new com.linkedin.pegasus2avro.schema.SchemaMetadataKey.Builder();
  }
  
  /** Creates a new SchemaMetadataKey RecordBuilder by copying an existing Builder */
  public static com.linkedin.pegasus2avro.schema.SchemaMetadataKey.Builder newBuilder(com.linkedin.pegasus2avro.schema.SchemaMetadataKey.Builder other) {
    return new com.linkedin.pegasus2avro.schema.SchemaMetadataKey.Builder(other);
  }
  
  /** Creates a new SchemaMetadataKey RecordBuilder by copying an existing SchemaMetadataKey instance */
  public static com.linkedin.pegasus2avro.schema.SchemaMetadataKey.Builder newBuilder(com.linkedin.pegasus2avro.schema.SchemaMetadataKey other) {
    return new com.linkedin.pegasus2avro.schema.SchemaMetadataKey.Builder(other);
  }
  
  /**
   * RecordBuilder for SchemaMetadataKey instances.
   */
  public static class Builder extends org.apache.avro.specific.SpecificRecordBuilderBase<SchemaMetadataKey>
    implements org.apache.avro.data.RecordBuilder<SchemaMetadataKey> {

    private java.lang.String schemaName;
    private java.lang.String platform;
    private long version;

    /** Creates a new Builder */
    private Builder() {
      super(com.linkedin.pegasus2avro.schema.SchemaMetadataKey.SCHEMA$);
    }
    
    /** Creates a Builder by copying an existing Builder */
    private Builder(com.linkedin.pegasus2avro.schema.SchemaMetadataKey.Builder other) {
      super(other);
      if (isValidValue(fields()[0], other.schemaName)) {
        this.schemaName = data().deepCopy(fields()[0].schema(), other.schemaName);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.platform)) {
        this.platform = data().deepCopy(fields()[1].schema(), other.platform);
        fieldSetFlags()[1] = true;
      }
      if (isValidValue(fields()[2], other.version)) {
        this.version = data().deepCopy(fields()[2].schema(), other.version);
        fieldSetFlags()[2] = true;
      }
    }
    
    /** Creates a Builder by copying an existing SchemaMetadataKey instance */
    private Builder(com.linkedin.pegasus2avro.schema.SchemaMetadataKey other) {
            super(com.linkedin.pegasus2avro.schema.SchemaMetadataKey.SCHEMA$);
      if (isValidValue(fields()[0], other.schemaName)) {
        this.schemaName = data().deepCopy(fields()[0].schema(), other.schemaName);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.platform)) {
        this.platform = data().deepCopy(fields()[1].schema(), other.platform);
        fieldSetFlags()[1] = true;
      }
      if (isValidValue(fields()[2], other.version)) {
        this.version = data().deepCopy(fields()[2].schema(), other.version);
        fieldSetFlags()[2] = true;
      }
    }

    /** Gets the value of the 'schemaName' field */
    public java.lang.String getSchemaName() {
      return schemaName;
    }
    
    /** Sets the value of the 'schemaName' field */
    public com.linkedin.pegasus2avro.schema.SchemaMetadataKey.Builder setSchemaName(java.lang.String value) {
      validate(fields()[0], value);
      this.schemaName = value;
      fieldSetFlags()[0] = true;
      return this; 
    }
    
    /** Checks whether the 'schemaName' field has been set */
    public boolean hasSchemaName() {
      return fieldSetFlags()[0];
    }
    
    /** Clears the value of the 'schemaName' field */
    public com.linkedin.pegasus2avro.schema.SchemaMetadataKey.Builder clearSchemaName() {
      schemaName = null;
      fieldSetFlags()[0] = false;
      return this;
    }

    /** Gets the value of the 'platform' field */
    public java.lang.String getPlatform() {
      return platform;
    }
    
    /** Sets the value of the 'platform' field */
    public com.linkedin.pegasus2avro.schema.SchemaMetadataKey.Builder setPlatform(java.lang.String value) {
      validate(fields()[1], value);
      this.platform = value;
      fieldSetFlags()[1] = true;
      return this; 
    }
    
    /** Checks whether the 'platform' field has been set */
    public boolean hasPlatform() {
      return fieldSetFlags()[1];
    }
    
    /** Clears the value of the 'platform' field */
    public com.linkedin.pegasus2avro.schema.SchemaMetadataKey.Builder clearPlatform() {
      platform = null;
      fieldSetFlags()[1] = false;
      return this;
    }

    /** Gets the value of the 'version' field */
    public java.lang.Long getVersion() {
      return version;
    }
    
    /** Sets the value of the 'version' field */
    public com.linkedin.pegasus2avro.schema.SchemaMetadataKey.Builder setVersion(long value) {
      validate(fields()[2], value);
      this.version = value;
      fieldSetFlags()[2] = true;
      return this; 
    }
    
    /** Checks whether the 'version' field has been set */
    public boolean hasVersion() {
      return fieldSetFlags()[2];
    }
    
    /** Clears the value of the 'version' field */
    public com.linkedin.pegasus2avro.schema.SchemaMetadataKey.Builder clearVersion() {
      fieldSetFlags()[2] = false;
      return this;
    }

    @Override
    public SchemaMetadataKey build() {
      try {
        SchemaMetadataKey record = new SchemaMetadataKey();
        record.schemaName = fieldSetFlags()[0] ? this.schemaName : (java.lang.String) defaultValue(fields()[0]);
        record.platform = fieldSetFlags()[1] ? this.platform : (java.lang.String) defaultValue(fields()[1]);
        record.version = fieldSetFlags()[2] ? this.version : (java.lang.Long) defaultValue(fields()[2]);
        return record;
      } catch (Exception e) {
        throw new org.apache.avro.AvroRuntimeException(e);
      }
    }
  }
}
