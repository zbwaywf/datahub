/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */
package com.linkedin.pegasus2avro.common;  
@SuppressWarnings("all")
/** Tag aspect used for applying tags to an entity */
@org.apache.avro.specific.AvroGenerated
public class GlobalTags extends org.apache.avro.specific.SpecificRecordBase implements org.apache.avro.specific.SpecificRecord {
  public static final org.apache.avro.Schema SCHEMA$ = new org.apache.avro.Schema.Parser().parse("{\"type\":\"record\",\"name\":\"GlobalTags\",\"namespace\":\"com.linkedin.pegasus2avro.common\",\"doc\":\"Tag aspect used for applying tags to an entity\",\"fields\":[{\"name\":\"tags\",\"type\":{\"type\":\"array\",\"items\":{\"type\":\"record\",\"name\":\"TagAssociation\",\"doc\":\"Properties of an applied tag. For now, just an Urn. In the future we can extend this with other properties, e.g.\\npropagation parameters.\",\"fields\":[{\"name\":\"tag\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"Urn of the applied tag\",\"Relationship\":{\"entityTypes\":[\"tag\"],\"name\":\"TaggedWith\"},\"Searchable\":{\"addToFilters\":true,\"fieldName\":\"tags\",\"fieldType\":\"URN\",\"filterNameOverride\":\"Tag\",\"hasValuesFieldName\":\"hasTags\"},\"java\":{\"class\":\"com.linkedin.pegasus2avro.common.urn.TagUrn\"}},{\"name\":\"context\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"Additional context about the association\",\"default\":null}]}},\"doc\":\"Tags associated with a given entity\",\"Searchable\":{\"/*/tag\":{\"addToFilters\":true,\"boostScore\":0.5,\"fieldName\":\"tags\",\"fieldType\":\"URN\",\"queryByDefault\":true}}}],\"Aspect\":{\"name\":\"globalTags\"}}");
  public static org.apache.avro.Schema getClassSchema() { return SCHEMA$; }
  /** Tags associated with a given entity */
  @Deprecated public java.util.List<com.linkedin.pegasus2avro.common.TagAssociation> tags;

  /**
   * Default constructor.  Note that this does not initialize fields
   * to their default values from the schema.  If that is desired then
   * one should use <code>newBuilder()</code>. 
   */
  public GlobalTags() {}

  /**
   * All-args constructor.
   */
  public GlobalTags(java.util.List<com.linkedin.pegasus2avro.common.TagAssociation> tags) {
    this.tags = tags;
  }

  public org.apache.avro.Schema getSchema() { return SCHEMA$; }
  // Used by DatumWriter.  Applications should not call. 
  public java.lang.Object get(int field$) {
    switch (field$) {
    case 0: return tags;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }
  // Used by DatumReader.  Applications should not call. 
  @SuppressWarnings(value="unchecked")
  public void put(int field$, java.lang.Object value$) {
    switch (field$) {
    case 0: tags = (java.util.List<com.linkedin.pegasus2avro.common.TagAssociation>)value$; break;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }

  /**
   * Gets the value of the 'tags' field.
   * Tags associated with a given entity   */
  public java.util.List<com.linkedin.pegasus2avro.common.TagAssociation> getTags() {
    return tags;
  }

  /**
   * Sets the value of the 'tags' field.
   * Tags associated with a given entity   * @param value the value to set.
   */
  public void setTags(java.util.List<com.linkedin.pegasus2avro.common.TagAssociation> value) {
    this.tags = value;
  }

  /** Creates a new GlobalTags RecordBuilder */
  public static com.linkedin.pegasus2avro.common.GlobalTags.Builder newBuilder() {
    return new com.linkedin.pegasus2avro.common.GlobalTags.Builder();
  }
  
  /** Creates a new GlobalTags RecordBuilder by copying an existing Builder */
  public static com.linkedin.pegasus2avro.common.GlobalTags.Builder newBuilder(com.linkedin.pegasus2avro.common.GlobalTags.Builder other) {
    return new com.linkedin.pegasus2avro.common.GlobalTags.Builder(other);
  }
  
  /** Creates a new GlobalTags RecordBuilder by copying an existing GlobalTags instance */
  public static com.linkedin.pegasus2avro.common.GlobalTags.Builder newBuilder(com.linkedin.pegasus2avro.common.GlobalTags other) {
    return new com.linkedin.pegasus2avro.common.GlobalTags.Builder(other);
  }
  
  /**
   * RecordBuilder for GlobalTags instances.
   */
  public static class Builder extends org.apache.avro.specific.SpecificRecordBuilderBase<GlobalTags>
    implements org.apache.avro.data.RecordBuilder<GlobalTags> {

    private java.util.List<com.linkedin.pegasus2avro.common.TagAssociation> tags;

    /** Creates a new Builder */
    private Builder() {
      super(com.linkedin.pegasus2avro.common.GlobalTags.SCHEMA$);
    }
    
    /** Creates a Builder by copying an existing Builder */
    private Builder(com.linkedin.pegasus2avro.common.GlobalTags.Builder other) {
      super(other);
      if (isValidValue(fields()[0], other.tags)) {
        this.tags = data().deepCopy(fields()[0].schema(), other.tags);
        fieldSetFlags()[0] = true;
      }
    }
    
    /** Creates a Builder by copying an existing GlobalTags instance */
    private Builder(com.linkedin.pegasus2avro.common.GlobalTags other) {
            super(com.linkedin.pegasus2avro.common.GlobalTags.SCHEMA$);
      if (isValidValue(fields()[0], other.tags)) {
        this.tags = data().deepCopy(fields()[0].schema(), other.tags);
        fieldSetFlags()[0] = true;
      }
    }

    /** Gets the value of the 'tags' field */
    public java.util.List<com.linkedin.pegasus2avro.common.TagAssociation> getTags() {
      return tags;
    }
    
    /** Sets the value of the 'tags' field */
    public com.linkedin.pegasus2avro.common.GlobalTags.Builder setTags(java.util.List<com.linkedin.pegasus2avro.common.TagAssociation> value) {
      validate(fields()[0], value);
      this.tags = value;
      fieldSetFlags()[0] = true;
      return this; 
    }
    
    /** Checks whether the 'tags' field has been set */
    public boolean hasTags() {
      return fieldSetFlags()[0];
    }
    
    /** Clears the value of the 'tags' field */
    public com.linkedin.pegasus2avro.common.GlobalTags.Builder clearTags() {
      tags = null;
      fieldSetFlags()[0] = false;
      return this;
    }

    @Override
    public GlobalTags build() {
      try {
        GlobalTags record = new GlobalTags();
        record.tags = fieldSetFlags()[0] ? this.tags : (java.util.List<com.linkedin.pegasus2avro.common.TagAssociation>) defaultValue(fields()[0]);
        return record;
      } catch (Exception e) {
        throw new org.apache.avro.AvroRuntimeException(e);
      }
    }
  }
}
