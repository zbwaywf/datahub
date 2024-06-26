/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */
package com.linkedin.pegasus2avro.metadata.browse;  
@SuppressWarnings("all")
/** The model for browse result metadata */
@org.apache.avro.specific.AvroGenerated
public class BrowseResultMetadata extends org.apache.avro.specific.SpecificRecordBase implements org.apache.avro.specific.SpecificRecord {
  public static final org.apache.avro.Schema SCHEMA$ = new org.apache.avro.Schema.Parser().parse("{\"type\":\"record\",\"name\":\"BrowseResultMetadata\",\"namespace\":\"com.linkedin.pegasus2avro.metadata.browse\",\"doc\":\"The model for browse result metadata\",\"fields\":[{\"name\":\"path\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"Path that is being browsed\"},{\"name\":\"totalNumEntities\",\"type\":\"long\",\"doc\":\"Total number of entities we can reach from path\"}]}");
  public static org.apache.avro.Schema getClassSchema() { return SCHEMA$; }
  /** Path that is being browsed */
  @Deprecated public java.lang.String path;
  /** Total number of entities we can reach from path */
  @Deprecated public long totalNumEntities;

  /**
   * Default constructor.  Note that this does not initialize fields
   * to their default values from the schema.  If that is desired then
   * one should use <code>newBuilder()</code>. 
   */
  public BrowseResultMetadata() {}

  /**
   * All-args constructor.
   */
  public BrowseResultMetadata(java.lang.String path, java.lang.Long totalNumEntities) {
    this.path = path;
    this.totalNumEntities = totalNumEntities;
  }

  public org.apache.avro.Schema getSchema() { return SCHEMA$; }
  // Used by DatumWriter.  Applications should not call. 
  public java.lang.Object get(int field$) {
    switch (field$) {
    case 0: return path;
    case 1: return totalNumEntities;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }
  // Used by DatumReader.  Applications should not call. 
  @SuppressWarnings(value="unchecked")
  public void put(int field$, java.lang.Object value$) {
    switch (field$) {
    case 0: path = (java.lang.String)value$; break;
    case 1: totalNumEntities = (java.lang.Long)value$; break;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }

  /**
   * Gets the value of the 'path' field.
   * Path that is being browsed   */
  public java.lang.String getPath() {
    return path;
  }

  /**
   * Sets the value of the 'path' field.
   * Path that is being browsed   * @param value the value to set.
   */
  public void setPath(java.lang.String value) {
    this.path = value;
  }

  /**
   * Gets the value of the 'totalNumEntities' field.
   * Total number of entities we can reach from path   */
  public java.lang.Long getTotalNumEntities() {
    return totalNumEntities;
  }

  /**
   * Sets the value of the 'totalNumEntities' field.
   * Total number of entities we can reach from path   * @param value the value to set.
   */
  public void setTotalNumEntities(java.lang.Long value) {
    this.totalNumEntities = value;
  }

  /** Creates a new BrowseResultMetadata RecordBuilder */
  public static com.linkedin.pegasus2avro.metadata.browse.BrowseResultMetadata.Builder newBuilder() {
    return new com.linkedin.pegasus2avro.metadata.browse.BrowseResultMetadata.Builder();
  }
  
  /** Creates a new BrowseResultMetadata RecordBuilder by copying an existing Builder */
  public static com.linkedin.pegasus2avro.metadata.browse.BrowseResultMetadata.Builder newBuilder(com.linkedin.pegasus2avro.metadata.browse.BrowseResultMetadata.Builder other) {
    return new com.linkedin.pegasus2avro.metadata.browse.BrowseResultMetadata.Builder(other);
  }
  
  /** Creates a new BrowseResultMetadata RecordBuilder by copying an existing BrowseResultMetadata instance */
  public static com.linkedin.pegasus2avro.metadata.browse.BrowseResultMetadata.Builder newBuilder(com.linkedin.pegasus2avro.metadata.browse.BrowseResultMetadata other) {
    return new com.linkedin.pegasus2avro.metadata.browse.BrowseResultMetadata.Builder(other);
  }
  
  /**
   * RecordBuilder for BrowseResultMetadata instances.
   */
  public static class Builder extends org.apache.avro.specific.SpecificRecordBuilderBase<BrowseResultMetadata>
    implements org.apache.avro.data.RecordBuilder<BrowseResultMetadata> {

    private java.lang.String path;
    private long totalNumEntities;

    /** Creates a new Builder */
    private Builder() {
      super(com.linkedin.pegasus2avro.metadata.browse.BrowseResultMetadata.SCHEMA$);
    }
    
    /** Creates a Builder by copying an existing Builder */
    private Builder(com.linkedin.pegasus2avro.metadata.browse.BrowseResultMetadata.Builder other) {
      super(other);
      if (isValidValue(fields()[0], other.path)) {
        this.path = data().deepCopy(fields()[0].schema(), other.path);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.totalNumEntities)) {
        this.totalNumEntities = data().deepCopy(fields()[1].schema(), other.totalNumEntities);
        fieldSetFlags()[1] = true;
      }
    }
    
    /** Creates a Builder by copying an existing BrowseResultMetadata instance */
    private Builder(com.linkedin.pegasus2avro.metadata.browse.BrowseResultMetadata other) {
            super(com.linkedin.pegasus2avro.metadata.browse.BrowseResultMetadata.SCHEMA$);
      if (isValidValue(fields()[0], other.path)) {
        this.path = data().deepCopy(fields()[0].schema(), other.path);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.totalNumEntities)) {
        this.totalNumEntities = data().deepCopy(fields()[1].schema(), other.totalNumEntities);
        fieldSetFlags()[1] = true;
      }
    }

    /** Gets the value of the 'path' field */
    public java.lang.String getPath() {
      return path;
    }
    
    /** Sets the value of the 'path' field */
    public com.linkedin.pegasus2avro.metadata.browse.BrowseResultMetadata.Builder setPath(java.lang.String value) {
      validate(fields()[0], value);
      this.path = value;
      fieldSetFlags()[0] = true;
      return this; 
    }
    
    /** Checks whether the 'path' field has been set */
    public boolean hasPath() {
      return fieldSetFlags()[0];
    }
    
    /** Clears the value of the 'path' field */
    public com.linkedin.pegasus2avro.metadata.browse.BrowseResultMetadata.Builder clearPath() {
      path = null;
      fieldSetFlags()[0] = false;
      return this;
    }

    /** Gets the value of the 'totalNumEntities' field */
    public java.lang.Long getTotalNumEntities() {
      return totalNumEntities;
    }
    
    /** Sets the value of the 'totalNumEntities' field */
    public com.linkedin.pegasus2avro.metadata.browse.BrowseResultMetadata.Builder setTotalNumEntities(long value) {
      validate(fields()[1], value);
      this.totalNumEntities = value;
      fieldSetFlags()[1] = true;
      return this; 
    }
    
    /** Checks whether the 'totalNumEntities' field has been set */
    public boolean hasTotalNumEntities() {
      return fieldSetFlags()[1];
    }
    
    /** Clears the value of the 'totalNumEntities' field */
    public com.linkedin.pegasus2avro.metadata.browse.BrowseResultMetadata.Builder clearTotalNumEntities() {
      fieldSetFlags()[1] = false;
      return this;
    }

    @Override
    public BrowseResultMetadata build() {
      try {
        BrowseResultMetadata record = new BrowseResultMetadata();
        record.path = fieldSetFlags()[0] ? this.path : (java.lang.String) defaultValue(fields()[0]);
        record.totalNumEntities = fieldSetFlags()[1] ? this.totalNumEntities : (java.lang.Long) defaultValue(fields()[1]);
        return record;
      } catch (Exception e) {
        throw new org.apache.avro.AvroRuntimeException(e);
      }
    }
  }
}
