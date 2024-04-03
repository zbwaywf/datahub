/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */
package com.linkedin.pegasus2avro.metadata.key;  
@SuppressWarnings("all")
/** Key for an MLFeature */
@org.apache.avro.specific.AvroGenerated
public class MLFeatureKey extends org.apache.avro.specific.SpecificRecordBase implements org.apache.avro.specific.SpecificRecord {
  public static final org.apache.avro.Schema SCHEMA$ = new org.apache.avro.Schema.Parser().parse("{\"type\":\"record\",\"name\":\"MLFeatureKey\",\"namespace\":\"com.linkedin.pegasus2avro.metadata.key\",\"doc\":\"Key for an MLFeature\",\"fields\":[{\"name\":\"featureNamespace\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"Namespace for the feature\",\"Searchable\":{\"fieldType\":\"TEXT_PARTIAL\"}},{\"name\":\"name\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"Name of the feature\",\"Searchable\":{\"boostScore\":8.0,\"enableAutocomplete\":true,\"fieldType\":\"TEXT_PARTIAL\"}}],\"Aspect\":{\"name\":\"mlFeatureKey\"}}");
  public static org.apache.avro.Schema getClassSchema() { return SCHEMA$; }
  /** Namespace for the feature */
  @Deprecated public java.lang.String featureNamespace;
  /** Name of the feature */
  @Deprecated public java.lang.String name;

  /**
   * Default constructor.  Note that this does not initialize fields
   * to their default values from the schema.  If that is desired then
   * one should use <code>newBuilder()</code>. 
   */
  public MLFeatureKey() {}

  /**
   * All-args constructor.
   */
  public MLFeatureKey(java.lang.String featureNamespace, java.lang.String name) {
    this.featureNamespace = featureNamespace;
    this.name = name;
  }

  public org.apache.avro.Schema getSchema() { return SCHEMA$; }
  // Used by DatumWriter.  Applications should not call. 
  public java.lang.Object get(int field$) {
    switch (field$) {
    case 0: return featureNamespace;
    case 1: return name;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }
  // Used by DatumReader.  Applications should not call. 
  @SuppressWarnings(value="unchecked")
  public void put(int field$, java.lang.Object value$) {
    switch (field$) {
    case 0: featureNamespace = (java.lang.String)value$; break;
    case 1: name = (java.lang.String)value$; break;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }

  /**
   * Gets the value of the 'featureNamespace' field.
   * Namespace for the feature   */
  public java.lang.String getFeatureNamespace() {
    return featureNamespace;
  }

  /**
   * Sets the value of the 'featureNamespace' field.
   * Namespace for the feature   * @param value the value to set.
   */
  public void setFeatureNamespace(java.lang.String value) {
    this.featureNamespace = value;
  }

  /**
   * Gets the value of the 'name' field.
   * Name of the feature   */
  public java.lang.String getName() {
    return name;
  }

  /**
   * Sets the value of the 'name' field.
   * Name of the feature   * @param value the value to set.
   */
  public void setName(java.lang.String value) {
    this.name = value;
  }

  /** Creates a new MLFeatureKey RecordBuilder */
  public static com.linkedin.pegasus2avro.metadata.key.MLFeatureKey.Builder newBuilder() {
    return new com.linkedin.pegasus2avro.metadata.key.MLFeatureKey.Builder();
  }
  
  /** Creates a new MLFeatureKey RecordBuilder by copying an existing Builder */
  public static com.linkedin.pegasus2avro.metadata.key.MLFeatureKey.Builder newBuilder(com.linkedin.pegasus2avro.metadata.key.MLFeatureKey.Builder other) {
    return new com.linkedin.pegasus2avro.metadata.key.MLFeatureKey.Builder(other);
  }
  
  /** Creates a new MLFeatureKey RecordBuilder by copying an existing MLFeatureKey instance */
  public static com.linkedin.pegasus2avro.metadata.key.MLFeatureKey.Builder newBuilder(com.linkedin.pegasus2avro.metadata.key.MLFeatureKey other) {
    return new com.linkedin.pegasus2avro.metadata.key.MLFeatureKey.Builder(other);
  }
  
  /**
   * RecordBuilder for MLFeatureKey instances.
   */
  public static class Builder extends org.apache.avro.specific.SpecificRecordBuilderBase<MLFeatureKey>
    implements org.apache.avro.data.RecordBuilder<MLFeatureKey> {

    private java.lang.String featureNamespace;
    private java.lang.String name;

    /** Creates a new Builder */
    private Builder() {
      super(com.linkedin.pegasus2avro.metadata.key.MLFeatureKey.SCHEMA$);
    }
    
    /** Creates a Builder by copying an existing Builder */
    private Builder(com.linkedin.pegasus2avro.metadata.key.MLFeatureKey.Builder other) {
      super(other);
      if (isValidValue(fields()[0], other.featureNamespace)) {
        this.featureNamespace = data().deepCopy(fields()[0].schema(), other.featureNamespace);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.name)) {
        this.name = data().deepCopy(fields()[1].schema(), other.name);
        fieldSetFlags()[1] = true;
      }
    }
    
    /** Creates a Builder by copying an existing MLFeatureKey instance */
    private Builder(com.linkedin.pegasus2avro.metadata.key.MLFeatureKey other) {
            super(com.linkedin.pegasus2avro.metadata.key.MLFeatureKey.SCHEMA$);
      if (isValidValue(fields()[0], other.featureNamespace)) {
        this.featureNamespace = data().deepCopy(fields()[0].schema(), other.featureNamespace);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.name)) {
        this.name = data().deepCopy(fields()[1].schema(), other.name);
        fieldSetFlags()[1] = true;
      }
    }

    /** Gets the value of the 'featureNamespace' field */
    public java.lang.String getFeatureNamespace() {
      return featureNamespace;
    }
    
    /** Sets the value of the 'featureNamespace' field */
    public com.linkedin.pegasus2avro.metadata.key.MLFeatureKey.Builder setFeatureNamespace(java.lang.String value) {
      validate(fields()[0], value);
      this.featureNamespace = value;
      fieldSetFlags()[0] = true;
      return this; 
    }
    
    /** Checks whether the 'featureNamespace' field has been set */
    public boolean hasFeatureNamespace() {
      return fieldSetFlags()[0];
    }
    
    /** Clears the value of the 'featureNamespace' field */
    public com.linkedin.pegasus2avro.metadata.key.MLFeatureKey.Builder clearFeatureNamespace() {
      featureNamespace = null;
      fieldSetFlags()[0] = false;
      return this;
    }

    /** Gets the value of the 'name' field */
    public java.lang.String getName() {
      return name;
    }
    
    /** Sets the value of the 'name' field */
    public com.linkedin.pegasus2avro.metadata.key.MLFeatureKey.Builder setName(java.lang.String value) {
      validate(fields()[1], value);
      this.name = value;
      fieldSetFlags()[1] = true;
      return this; 
    }
    
    /** Checks whether the 'name' field has been set */
    public boolean hasName() {
      return fieldSetFlags()[1];
    }
    
    /** Clears the value of the 'name' field */
    public com.linkedin.pegasus2avro.metadata.key.MLFeatureKey.Builder clearName() {
      name = null;
      fieldSetFlags()[1] = false;
      return this;
    }

    @Override
    public MLFeatureKey build() {
      try {
        MLFeatureKey record = new MLFeatureKey();
        record.featureNamespace = fieldSetFlags()[0] ? this.featureNamespace : (java.lang.String) defaultValue(fields()[0]);
        record.name = fieldSetFlags()[1] ? this.name : (java.lang.String) defaultValue(fields()[1]);
        return record;
      } catch (Exception e) {
        throw new org.apache.avro.AvroRuntimeException(e);
      }
    }
  }
}
