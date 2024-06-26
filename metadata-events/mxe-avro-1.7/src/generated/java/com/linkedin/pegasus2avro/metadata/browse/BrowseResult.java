/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */
package com.linkedin.pegasus2avro.metadata.browse;  
@SuppressWarnings("all")
/** The model for the result of a browse query */
@org.apache.avro.specific.AvroGenerated
public class BrowseResult extends org.apache.avro.specific.SpecificRecordBase implements org.apache.avro.specific.SpecificRecord {
  public static final org.apache.avro.Schema SCHEMA$ = new org.apache.avro.Schema.Parser().parse("{\"type\":\"record\",\"name\":\"BrowseResult\",\"namespace\":\"com.linkedin.pegasus2avro.metadata.browse\",\"doc\":\"The model for the result of a browse query\",\"fields\":[{\"name\":\"entities\",\"type\":{\"type\":\"array\",\"items\":{\"type\":\"record\",\"name\":\"BrowseResultEntity\",\"doc\":\"Data model for an entity returned as part of a browse query\",\"fields\":[{\"name\":\"name\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"Name of the entity\",\"default\":null},{\"name\":\"urn\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"URN of the entity\",\"java\":{\"class\":\"com.linkedin.pegasus2avro.common.urn.Urn\"}}]}},\"doc\":\"A list of entities under the queried path\"},{\"name\":\"groups\",\"type\":{\"type\":\"array\",\"items\":{\"type\":\"record\",\"name\":\"BrowseResultGroup\",\"fields\":[{\"name\":\"name\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"Name of the group\"},{\"name\":\"count\",\"type\":\"long\",\"doc\":\"Number of entities that can be reached from this path\"}]}},\"doc\":\"A list of groups and total number of entities inside those groups under the queried path\",\"default\":[]},{\"name\":\"metadata\",\"type\":{\"type\":\"record\",\"name\":\"BrowseResultMetadata\",\"doc\":\"The model for browse result metadata\",\"fields\":[{\"name\":\"path\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"Path that is being browsed\"},{\"name\":\"totalNumEntities\",\"type\":\"long\",\"doc\":\"Total number of entities we can reach from path\"}]},\"doc\":\"Metadata specific to the browse result of the queried path\"},{\"name\":\"from\",\"type\":\"int\",\"doc\":\"Offset of the first entity in the result\"},{\"name\":\"pageSize\",\"type\":\"int\",\"doc\":\"Size of each page in the result\"},{\"name\":\"numEntities\",\"type\":\"int\",\"doc\":\"The total number of entities directly under queried path\"},{\"name\":\"numGroups\",\"type\":\"int\",\"doc\":\"The total number of groups directly under queried path\"},{\"name\":\"numElements\",\"type\":\"int\",\"doc\":\"The total number of elements (entities + groups) directly under queried path\"}]}");
  public static org.apache.avro.Schema getClassSchema() { return SCHEMA$; }
  /** A list of entities under the queried path */
  @Deprecated public java.util.List<com.linkedin.pegasus2avro.metadata.browse.BrowseResultEntity> entities;
  /** A list of groups and total number of entities inside those groups under the queried path */
  @Deprecated public java.util.List<com.linkedin.pegasus2avro.metadata.browse.BrowseResultGroup> groups;
  /** Metadata specific to the browse result of the queried path */
  @Deprecated public com.linkedin.pegasus2avro.metadata.browse.BrowseResultMetadata metadata;
  /** Offset of the first entity in the result */
  @Deprecated public int from;
  /** Size of each page in the result */
  @Deprecated public int pageSize;
  /** The total number of entities directly under queried path */
  @Deprecated public int numEntities;
  /** The total number of groups directly under queried path */
  @Deprecated public int numGroups;
  /** The total number of elements (entities + groups) directly under queried path */
  @Deprecated public int numElements;

  /**
   * Default constructor.  Note that this does not initialize fields
   * to their default values from the schema.  If that is desired then
   * one should use <code>newBuilder()</code>. 
   */
  public BrowseResult() {}

  /**
   * All-args constructor.
   */
  public BrowseResult(java.util.List<com.linkedin.pegasus2avro.metadata.browse.BrowseResultEntity> entities, java.util.List<com.linkedin.pegasus2avro.metadata.browse.BrowseResultGroup> groups, com.linkedin.pegasus2avro.metadata.browse.BrowseResultMetadata metadata, java.lang.Integer from, java.lang.Integer pageSize, java.lang.Integer numEntities, java.lang.Integer numGroups, java.lang.Integer numElements) {
    this.entities = entities;
    this.groups = groups;
    this.metadata = metadata;
    this.from = from;
    this.pageSize = pageSize;
    this.numEntities = numEntities;
    this.numGroups = numGroups;
    this.numElements = numElements;
  }

  public org.apache.avro.Schema getSchema() { return SCHEMA$; }
  // Used by DatumWriter.  Applications should not call. 
  public java.lang.Object get(int field$) {
    switch (field$) {
    case 0: return entities;
    case 1: return groups;
    case 2: return metadata;
    case 3: return from;
    case 4: return pageSize;
    case 5: return numEntities;
    case 6: return numGroups;
    case 7: return numElements;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }
  // Used by DatumReader.  Applications should not call. 
  @SuppressWarnings(value="unchecked")
  public void put(int field$, java.lang.Object value$) {
    switch (field$) {
    case 0: entities = (java.util.List<com.linkedin.pegasus2avro.metadata.browse.BrowseResultEntity>)value$; break;
    case 1: groups = (java.util.List<com.linkedin.pegasus2avro.metadata.browse.BrowseResultGroup>)value$; break;
    case 2: metadata = (com.linkedin.pegasus2avro.metadata.browse.BrowseResultMetadata)value$; break;
    case 3: from = (java.lang.Integer)value$; break;
    case 4: pageSize = (java.lang.Integer)value$; break;
    case 5: numEntities = (java.lang.Integer)value$; break;
    case 6: numGroups = (java.lang.Integer)value$; break;
    case 7: numElements = (java.lang.Integer)value$; break;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }

  /**
   * Gets the value of the 'entities' field.
   * A list of entities under the queried path   */
  public java.util.List<com.linkedin.pegasus2avro.metadata.browse.BrowseResultEntity> getEntities() {
    return entities;
  }

  /**
   * Sets the value of the 'entities' field.
   * A list of entities under the queried path   * @param value the value to set.
   */
  public void setEntities(java.util.List<com.linkedin.pegasus2avro.metadata.browse.BrowseResultEntity> value) {
    this.entities = value;
  }

  /**
   * Gets the value of the 'groups' field.
   * A list of groups and total number of entities inside those groups under the queried path   */
  public java.util.List<com.linkedin.pegasus2avro.metadata.browse.BrowseResultGroup> getGroups() {
    return groups;
  }

  /**
   * Sets the value of the 'groups' field.
   * A list of groups and total number of entities inside those groups under the queried path   * @param value the value to set.
   */
  public void setGroups(java.util.List<com.linkedin.pegasus2avro.metadata.browse.BrowseResultGroup> value) {
    this.groups = value;
  }

  /**
   * Gets the value of the 'metadata' field.
   * Metadata specific to the browse result of the queried path   */
  public com.linkedin.pegasus2avro.metadata.browse.BrowseResultMetadata getMetadata() {
    return metadata;
  }

  /**
   * Sets the value of the 'metadata' field.
   * Metadata specific to the browse result of the queried path   * @param value the value to set.
   */
  public void setMetadata(com.linkedin.pegasus2avro.metadata.browse.BrowseResultMetadata value) {
    this.metadata = value;
  }

  /**
   * Gets the value of the 'from' field.
   * Offset of the first entity in the result   */
  public java.lang.Integer getFrom() {
    return from;
  }

  /**
   * Sets the value of the 'from' field.
   * Offset of the first entity in the result   * @param value the value to set.
   */
  public void setFrom(java.lang.Integer value) {
    this.from = value;
  }

  /**
   * Gets the value of the 'pageSize' field.
   * Size of each page in the result   */
  public java.lang.Integer getPageSize() {
    return pageSize;
  }

  /**
   * Sets the value of the 'pageSize' field.
   * Size of each page in the result   * @param value the value to set.
   */
  public void setPageSize(java.lang.Integer value) {
    this.pageSize = value;
  }

  /**
   * Gets the value of the 'numEntities' field.
   * The total number of entities directly under queried path   */
  public java.lang.Integer getNumEntities() {
    return numEntities;
  }

  /**
   * Sets the value of the 'numEntities' field.
   * The total number of entities directly under queried path   * @param value the value to set.
   */
  public void setNumEntities(java.lang.Integer value) {
    this.numEntities = value;
  }

  /**
   * Gets the value of the 'numGroups' field.
   * The total number of groups directly under queried path   */
  public java.lang.Integer getNumGroups() {
    return numGroups;
  }

  /**
   * Sets the value of the 'numGroups' field.
   * The total number of groups directly under queried path   * @param value the value to set.
   */
  public void setNumGroups(java.lang.Integer value) {
    this.numGroups = value;
  }

  /**
   * Gets the value of the 'numElements' field.
   * The total number of elements (entities + groups) directly under queried path   */
  public java.lang.Integer getNumElements() {
    return numElements;
  }

  /**
   * Sets the value of the 'numElements' field.
   * The total number of elements (entities + groups) directly under queried path   * @param value the value to set.
   */
  public void setNumElements(java.lang.Integer value) {
    this.numElements = value;
  }

  /** Creates a new BrowseResult RecordBuilder */
  public static com.linkedin.pegasus2avro.metadata.browse.BrowseResult.Builder newBuilder() {
    return new com.linkedin.pegasus2avro.metadata.browse.BrowseResult.Builder();
  }
  
  /** Creates a new BrowseResult RecordBuilder by copying an existing Builder */
  public static com.linkedin.pegasus2avro.metadata.browse.BrowseResult.Builder newBuilder(com.linkedin.pegasus2avro.metadata.browse.BrowseResult.Builder other) {
    return new com.linkedin.pegasus2avro.metadata.browse.BrowseResult.Builder(other);
  }
  
  /** Creates a new BrowseResult RecordBuilder by copying an existing BrowseResult instance */
  public static com.linkedin.pegasus2avro.metadata.browse.BrowseResult.Builder newBuilder(com.linkedin.pegasus2avro.metadata.browse.BrowseResult other) {
    return new com.linkedin.pegasus2avro.metadata.browse.BrowseResult.Builder(other);
  }
  
  /**
   * RecordBuilder for BrowseResult instances.
   */
  public static class Builder extends org.apache.avro.specific.SpecificRecordBuilderBase<BrowseResult>
    implements org.apache.avro.data.RecordBuilder<BrowseResult> {

    private java.util.List<com.linkedin.pegasus2avro.metadata.browse.BrowseResultEntity> entities;
    private java.util.List<com.linkedin.pegasus2avro.metadata.browse.BrowseResultGroup> groups;
    private com.linkedin.pegasus2avro.metadata.browse.BrowseResultMetadata metadata;
    private int from;
    private int pageSize;
    private int numEntities;
    private int numGroups;
    private int numElements;

    /** Creates a new Builder */
    private Builder() {
      super(com.linkedin.pegasus2avro.metadata.browse.BrowseResult.SCHEMA$);
    }
    
    /** Creates a Builder by copying an existing Builder */
    private Builder(com.linkedin.pegasus2avro.metadata.browse.BrowseResult.Builder other) {
      super(other);
      if (isValidValue(fields()[0], other.entities)) {
        this.entities = data().deepCopy(fields()[0].schema(), other.entities);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.groups)) {
        this.groups = data().deepCopy(fields()[1].schema(), other.groups);
        fieldSetFlags()[1] = true;
      }
      if (isValidValue(fields()[2], other.metadata)) {
        this.metadata = data().deepCopy(fields()[2].schema(), other.metadata);
        fieldSetFlags()[2] = true;
      }
      if (isValidValue(fields()[3], other.from)) {
        this.from = data().deepCopy(fields()[3].schema(), other.from);
        fieldSetFlags()[3] = true;
      }
      if (isValidValue(fields()[4], other.pageSize)) {
        this.pageSize = data().deepCopy(fields()[4].schema(), other.pageSize);
        fieldSetFlags()[4] = true;
      }
      if (isValidValue(fields()[5], other.numEntities)) {
        this.numEntities = data().deepCopy(fields()[5].schema(), other.numEntities);
        fieldSetFlags()[5] = true;
      }
      if (isValidValue(fields()[6], other.numGroups)) {
        this.numGroups = data().deepCopy(fields()[6].schema(), other.numGroups);
        fieldSetFlags()[6] = true;
      }
      if (isValidValue(fields()[7], other.numElements)) {
        this.numElements = data().deepCopy(fields()[7].schema(), other.numElements);
        fieldSetFlags()[7] = true;
      }
    }
    
    /** Creates a Builder by copying an existing BrowseResult instance */
    private Builder(com.linkedin.pegasus2avro.metadata.browse.BrowseResult other) {
            super(com.linkedin.pegasus2avro.metadata.browse.BrowseResult.SCHEMA$);
      if (isValidValue(fields()[0], other.entities)) {
        this.entities = data().deepCopy(fields()[0].schema(), other.entities);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.groups)) {
        this.groups = data().deepCopy(fields()[1].schema(), other.groups);
        fieldSetFlags()[1] = true;
      }
      if (isValidValue(fields()[2], other.metadata)) {
        this.metadata = data().deepCopy(fields()[2].schema(), other.metadata);
        fieldSetFlags()[2] = true;
      }
      if (isValidValue(fields()[3], other.from)) {
        this.from = data().deepCopy(fields()[3].schema(), other.from);
        fieldSetFlags()[3] = true;
      }
      if (isValidValue(fields()[4], other.pageSize)) {
        this.pageSize = data().deepCopy(fields()[4].schema(), other.pageSize);
        fieldSetFlags()[4] = true;
      }
      if (isValidValue(fields()[5], other.numEntities)) {
        this.numEntities = data().deepCopy(fields()[5].schema(), other.numEntities);
        fieldSetFlags()[5] = true;
      }
      if (isValidValue(fields()[6], other.numGroups)) {
        this.numGroups = data().deepCopy(fields()[6].schema(), other.numGroups);
        fieldSetFlags()[6] = true;
      }
      if (isValidValue(fields()[7], other.numElements)) {
        this.numElements = data().deepCopy(fields()[7].schema(), other.numElements);
        fieldSetFlags()[7] = true;
      }
    }

    /** Gets the value of the 'entities' field */
    public java.util.List<com.linkedin.pegasus2avro.metadata.browse.BrowseResultEntity> getEntities() {
      return entities;
    }
    
    /** Sets the value of the 'entities' field */
    public com.linkedin.pegasus2avro.metadata.browse.BrowseResult.Builder setEntities(java.util.List<com.linkedin.pegasus2avro.metadata.browse.BrowseResultEntity> value) {
      validate(fields()[0], value);
      this.entities = value;
      fieldSetFlags()[0] = true;
      return this; 
    }
    
    /** Checks whether the 'entities' field has been set */
    public boolean hasEntities() {
      return fieldSetFlags()[0];
    }
    
    /** Clears the value of the 'entities' field */
    public com.linkedin.pegasus2avro.metadata.browse.BrowseResult.Builder clearEntities() {
      entities = null;
      fieldSetFlags()[0] = false;
      return this;
    }

    /** Gets the value of the 'groups' field */
    public java.util.List<com.linkedin.pegasus2avro.metadata.browse.BrowseResultGroup> getGroups() {
      return groups;
    }
    
    /** Sets the value of the 'groups' field */
    public com.linkedin.pegasus2avro.metadata.browse.BrowseResult.Builder setGroups(java.util.List<com.linkedin.pegasus2avro.metadata.browse.BrowseResultGroup> value) {
      validate(fields()[1], value);
      this.groups = value;
      fieldSetFlags()[1] = true;
      return this; 
    }
    
    /** Checks whether the 'groups' field has been set */
    public boolean hasGroups() {
      return fieldSetFlags()[1];
    }
    
    /** Clears the value of the 'groups' field */
    public com.linkedin.pegasus2avro.metadata.browse.BrowseResult.Builder clearGroups() {
      groups = null;
      fieldSetFlags()[1] = false;
      return this;
    }

    /** Gets the value of the 'metadata' field */
    public com.linkedin.pegasus2avro.metadata.browse.BrowseResultMetadata getMetadata() {
      return metadata;
    }
    
    /** Sets the value of the 'metadata' field */
    public com.linkedin.pegasus2avro.metadata.browse.BrowseResult.Builder setMetadata(com.linkedin.pegasus2avro.metadata.browse.BrowseResultMetadata value) {
      validate(fields()[2], value);
      this.metadata = value;
      fieldSetFlags()[2] = true;
      return this; 
    }
    
    /** Checks whether the 'metadata' field has been set */
    public boolean hasMetadata() {
      return fieldSetFlags()[2];
    }
    
    /** Clears the value of the 'metadata' field */
    public com.linkedin.pegasus2avro.metadata.browse.BrowseResult.Builder clearMetadata() {
      metadata = null;
      fieldSetFlags()[2] = false;
      return this;
    }

    /** Gets the value of the 'from' field */
    public java.lang.Integer getFrom() {
      return from;
    }
    
    /** Sets the value of the 'from' field */
    public com.linkedin.pegasus2avro.metadata.browse.BrowseResult.Builder setFrom(int value) {
      validate(fields()[3], value);
      this.from = value;
      fieldSetFlags()[3] = true;
      return this; 
    }
    
    /** Checks whether the 'from' field has been set */
    public boolean hasFrom() {
      return fieldSetFlags()[3];
    }
    
    /** Clears the value of the 'from' field */
    public com.linkedin.pegasus2avro.metadata.browse.BrowseResult.Builder clearFrom() {
      fieldSetFlags()[3] = false;
      return this;
    }

    /** Gets the value of the 'pageSize' field */
    public java.lang.Integer getPageSize() {
      return pageSize;
    }
    
    /** Sets the value of the 'pageSize' field */
    public com.linkedin.pegasus2avro.metadata.browse.BrowseResult.Builder setPageSize(int value) {
      validate(fields()[4], value);
      this.pageSize = value;
      fieldSetFlags()[4] = true;
      return this; 
    }
    
    /** Checks whether the 'pageSize' field has been set */
    public boolean hasPageSize() {
      return fieldSetFlags()[4];
    }
    
    /** Clears the value of the 'pageSize' field */
    public com.linkedin.pegasus2avro.metadata.browse.BrowseResult.Builder clearPageSize() {
      fieldSetFlags()[4] = false;
      return this;
    }

    /** Gets the value of the 'numEntities' field */
    public java.lang.Integer getNumEntities() {
      return numEntities;
    }
    
    /** Sets the value of the 'numEntities' field */
    public com.linkedin.pegasus2avro.metadata.browse.BrowseResult.Builder setNumEntities(int value) {
      validate(fields()[5], value);
      this.numEntities = value;
      fieldSetFlags()[5] = true;
      return this; 
    }
    
    /** Checks whether the 'numEntities' field has been set */
    public boolean hasNumEntities() {
      return fieldSetFlags()[5];
    }
    
    /** Clears the value of the 'numEntities' field */
    public com.linkedin.pegasus2avro.metadata.browse.BrowseResult.Builder clearNumEntities() {
      fieldSetFlags()[5] = false;
      return this;
    }

    /** Gets the value of the 'numGroups' field */
    public java.lang.Integer getNumGroups() {
      return numGroups;
    }
    
    /** Sets the value of the 'numGroups' field */
    public com.linkedin.pegasus2avro.metadata.browse.BrowseResult.Builder setNumGroups(int value) {
      validate(fields()[6], value);
      this.numGroups = value;
      fieldSetFlags()[6] = true;
      return this; 
    }
    
    /** Checks whether the 'numGroups' field has been set */
    public boolean hasNumGroups() {
      return fieldSetFlags()[6];
    }
    
    /** Clears the value of the 'numGroups' field */
    public com.linkedin.pegasus2avro.metadata.browse.BrowseResult.Builder clearNumGroups() {
      fieldSetFlags()[6] = false;
      return this;
    }

    /** Gets the value of the 'numElements' field */
    public java.lang.Integer getNumElements() {
      return numElements;
    }
    
    /** Sets the value of the 'numElements' field */
    public com.linkedin.pegasus2avro.metadata.browse.BrowseResult.Builder setNumElements(int value) {
      validate(fields()[7], value);
      this.numElements = value;
      fieldSetFlags()[7] = true;
      return this; 
    }
    
    /** Checks whether the 'numElements' field has been set */
    public boolean hasNumElements() {
      return fieldSetFlags()[7];
    }
    
    /** Clears the value of the 'numElements' field */
    public com.linkedin.pegasus2avro.metadata.browse.BrowseResult.Builder clearNumElements() {
      fieldSetFlags()[7] = false;
      return this;
    }

    @Override
    public BrowseResult build() {
      try {
        BrowseResult record = new BrowseResult();
        record.entities = fieldSetFlags()[0] ? this.entities : (java.util.List<com.linkedin.pegasus2avro.metadata.browse.BrowseResultEntity>) defaultValue(fields()[0]);
        record.groups = fieldSetFlags()[1] ? this.groups : (java.util.List<com.linkedin.pegasus2avro.metadata.browse.BrowseResultGroup>) defaultValue(fields()[1]);
        record.metadata = fieldSetFlags()[2] ? this.metadata : (com.linkedin.pegasus2avro.metadata.browse.BrowseResultMetadata) defaultValue(fields()[2]);
        record.from = fieldSetFlags()[3] ? this.from : (java.lang.Integer) defaultValue(fields()[3]);
        record.pageSize = fieldSetFlags()[4] ? this.pageSize : (java.lang.Integer) defaultValue(fields()[4]);
        record.numEntities = fieldSetFlags()[5] ? this.numEntities : (java.lang.Integer) defaultValue(fields()[5]);
        record.numGroups = fieldSetFlags()[6] ? this.numGroups : (java.lang.Integer) defaultValue(fields()[6]);
        record.numElements = fieldSetFlags()[7] ? this.numElements : (java.lang.Integer) defaultValue(fields()[7]);
        return record;
      } catch (Exception e) {
        throw new org.apache.avro.AvroRuntimeException(e);
      }
    }
  }
}
