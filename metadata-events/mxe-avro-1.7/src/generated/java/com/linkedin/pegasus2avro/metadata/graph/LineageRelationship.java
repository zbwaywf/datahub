/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */
package com.linkedin.pegasus2avro.metadata.graph;  
@SuppressWarnings("all")
/** Metadata about a lineage relationship between two entities */
@org.apache.avro.specific.AvroGenerated
public class LineageRelationship extends org.apache.avro.specific.SpecificRecordBase implements org.apache.avro.specific.SpecificRecord {
  public static final org.apache.avro.Schema SCHEMA$ = new org.apache.avro.Schema.Parser().parse("{\"type\":\"record\",\"name\":\"LineageRelationship\",\"namespace\":\"com.linkedin.pegasus2avro.metadata.graph\",\"doc\":\"Metadata about a lineage relationship between two entities\",\"fields\":[{\"name\":\"type\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"The type of the relationship\"},{\"name\":\"entity\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"Entity that is related via lineage\",\"java\":{\"class\":\"com.linkedin.pegasus2avro.common.urn.Urn\"}},{\"name\":\"paths\",\"type\":{\"type\":\"array\",\"items\":{\"type\":\"array\",\"items\":{\"type\":\"string\",\"avro.java.string\":\"String\"}}},\"doc\":\"Optional list of entities between the source and destination node.\\nThere can be multiple paths from the source to the destination.\",\"default\":[]},{\"name\":\"path\",\"type\":{\"type\":\"array\",\"items\":{\"type\":\"string\",\"avro.java.string\":\"String\"}},\"doc\":\"Optional list of entities between the source and destination node\",\"default\":[],\"deprecated\":true},{\"name\":\"degree\",\"type\":\"int\",\"doc\":\"Degree of relationship (number of hops to get to entity)\",\"default\":1},{\"name\":\"createdOn\",\"type\":[\"null\",\"long\"],\"doc\":\"Timestamp for when this lineage relationship was created. Could be null.\",\"default\":null},{\"name\":\"createdActor\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"Urn of the actor that created this lineage relationship. Could be null.\",\"default\":null,\"java\":{\"class\":\"com.linkedin.pegasus2avro.common.urn.Urn\"}},{\"name\":\"updatedOn\",\"type\":[\"null\",\"long\"],\"doc\":\"Timestamp for when this lineage relationship was last updated. Could be null.\",\"default\":null},{\"name\":\"updatedActor\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"Urn of the actor that last updated this lineage relationship. Could be null.\",\"default\":null,\"java\":{\"class\":\"com.linkedin.pegasus2avro.common.urn.Urn\"}},{\"name\":\"isManual\",\"type\":[\"null\",\"boolean\"],\"doc\":\"Whether this lineage edge is a manual edge.\",\"default\":null}]}");
  public static org.apache.avro.Schema getClassSchema() { return SCHEMA$; }
  /** The type of the relationship */
  @Deprecated public java.lang.String type;
  /** Entity that is related via lineage */
  @Deprecated public java.lang.String entity;
  /** Optional list of entities between the source and destination node.
There can be multiple paths from the source to the destination. */
  @Deprecated public java.util.List<java.util.List<java.lang.String>> paths;
  /** Optional list of entities between the source and destination node */
  @Deprecated public java.util.List<java.lang.String> path;
  /** Degree of relationship (number of hops to get to entity) */
  @Deprecated public int degree;
  /** Timestamp for when this lineage relationship was created. Could be null. */
  @Deprecated public java.lang.Long createdOn;
  /** Urn of the actor that created this lineage relationship. Could be null. */
  @Deprecated public java.lang.String createdActor;
  /** Timestamp for when this lineage relationship was last updated. Could be null. */
  @Deprecated public java.lang.Long updatedOn;
  /** Urn of the actor that last updated this lineage relationship. Could be null. */
  @Deprecated public java.lang.String updatedActor;
  /** Whether this lineage edge is a manual edge. */
  @Deprecated public java.lang.Boolean isManual;

  /**
   * Default constructor.  Note that this does not initialize fields
   * to their default values from the schema.  If that is desired then
   * one should use <code>newBuilder()</code>. 
   */
  public LineageRelationship() {}

  /**
   * All-args constructor.
   */
  public LineageRelationship(java.lang.String type, java.lang.String entity, java.util.List<java.util.List<java.lang.String>> paths, java.util.List<java.lang.String> path, java.lang.Integer degree, java.lang.Long createdOn, java.lang.String createdActor, java.lang.Long updatedOn, java.lang.String updatedActor, java.lang.Boolean isManual) {
    this.type = type;
    this.entity = entity;
    this.paths = paths;
    this.path = path;
    this.degree = degree;
    this.createdOn = createdOn;
    this.createdActor = createdActor;
    this.updatedOn = updatedOn;
    this.updatedActor = updatedActor;
    this.isManual = isManual;
  }

  public org.apache.avro.Schema getSchema() { return SCHEMA$; }
  // Used by DatumWriter.  Applications should not call. 
  public java.lang.Object get(int field$) {
    switch (field$) {
    case 0: return type;
    case 1: return entity;
    case 2: return paths;
    case 3: return path;
    case 4: return degree;
    case 5: return createdOn;
    case 6: return createdActor;
    case 7: return updatedOn;
    case 8: return updatedActor;
    case 9: return isManual;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }
  // Used by DatumReader.  Applications should not call. 
  @SuppressWarnings(value="unchecked")
  public void put(int field$, java.lang.Object value$) {
    switch (field$) {
    case 0: type = (java.lang.String)value$; break;
    case 1: entity = (java.lang.String)value$; break;
    case 2: paths = (java.util.List<java.util.List<java.lang.String>>)value$; break;
    case 3: path = (java.util.List<java.lang.String>)value$; break;
    case 4: degree = (java.lang.Integer)value$; break;
    case 5: createdOn = (java.lang.Long)value$; break;
    case 6: createdActor = (java.lang.String)value$; break;
    case 7: updatedOn = (java.lang.Long)value$; break;
    case 8: updatedActor = (java.lang.String)value$; break;
    case 9: isManual = (java.lang.Boolean)value$; break;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
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

  /**
   * Gets the value of the 'entity' field.
   * Entity that is related via lineage   */
  public java.lang.String getEntity() {
    return entity;
  }

  /**
   * Sets the value of the 'entity' field.
   * Entity that is related via lineage   * @param value the value to set.
   */
  public void setEntity(java.lang.String value) {
    this.entity = value;
  }

  /**
   * Gets the value of the 'paths' field.
   * Optional list of entities between the source and destination node.
There can be multiple paths from the source to the destination.   */
  public java.util.List<java.util.List<java.lang.String>> getPaths() {
    return paths;
  }

  /**
   * Sets the value of the 'paths' field.
   * Optional list of entities between the source and destination node.
There can be multiple paths from the source to the destination.   * @param value the value to set.
   */
  public void setPaths(java.util.List<java.util.List<java.lang.String>> value) {
    this.paths = value;
  }

  /**
   * Gets the value of the 'path' field.
   * Optional list of entities between the source and destination node   */
  public java.util.List<java.lang.String> getPath() {
    return path;
  }

  /**
   * Sets the value of the 'path' field.
   * Optional list of entities between the source and destination node   * @param value the value to set.
   */
  public void setPath(java.util.List<java.lang.String> value) {
    this.path = value;
  }

  /**
   * Gets the value of the 'degree' field.
   * Degree of relationship (number of hops to get to entity)   */
  public java.lang.Integer getDegree() {
    return degree;
  }

  /**
   * Sets the value of the 'degree' field.
   * Degree of relationship (number of hops to get to entity)   * @param value the value to set.
   */
  public void setDegree(java.lang.Integer value) {
    this.degree = value;
  }

  /**
   * Gets the value of the 'createdOn' field.
   * Timestamp for when this lineage relationship was created. Could be null.   */
  public java.lang.Long getCreatedOn() {
    return createdOn;
  }

  /**
   * Sets the value of the 'createdOn' field.
   * Timestamp for when this lineage relationship was created. Could be null.   * @param value the value to set.
   */
  public void setCreatedOn(java.lang.Long value) {
    this.createdOn = value;
  }

  /**
   * Gets the value of the 'createdActor' field.
   * Urn of the actor that created this lineage relationship. Could be null.   */
  public java.lang.String getCreatedActor() {
    return createdActor;
  }

  /**
   * Sets the value of the 'createdActor' field.
   * Urn of the actor that created this lineage relationship. Could be null.   * @param value the value to set.
   */
  public void setCreatedActor(java.lang.String value) {
    this.createdActor = value;
  }

  /**
   * Gets the value of the 'updatedOn' field.
   * Timestamp for when this lineage relationship was last updated. Could be null.   */
  public java.lang.Long getUpdatedOn() {
    return updatedOn;
  }

  /**
   * Sets the value of the 'updatedOn' field.
   * Timestamp for when this lineage relationship was last updated. Could be null.   * @param value the value to set.
   */
  public void setUpdatedOn(java.lang.Long value) {
    this.updatedOn = value;
  }

  /**
   * Gets the value of the 'updatedActor' field.
   * Urn of the actor that last updated this lineage relationship. Could be null.   */
  public java.lang.String getUpdatedActor() {
    return updatedActor;
  }

  /**
   * Sets the value of the 'updatedActor' field.
   * Urn of the actor that last updated this lineage relationship. Could be null.   * @param value the value to set.
   */
  public void setUpdatedActor(java.lang.String value) {
    this.updatedActor = value;
  }

  /**
   * Gets the value of the 'isManual' field.
   * Whether this lineage edge is a manual edge.   */
  public java.lang.Boolean getIsManual() {
    return isManual;
  }

  /**
   * Sets the value of the 'isManual' field.
   * Whether this lineage edge is a manual edge.   * @param value the value to set.
   */
  public void setIsManual(java.lang.Boolean value) {
    this.isManual = value;
  }

  /** Creates a new LineageRelationship RecordBuilder */
  public static com.linkedin.pegasus2avro.metadata.graph.LineageRelationship.Builder newBuilder() {
    return new com.linkedin.pegasus2avro.metadata.graph.LineageRelationship.Builder();
  }
  
  /** Creates a new LineageRelationship RecordBuilder by copying an existing Builder */
  public static com.linkedin.pegasus2avro.metadata.graph.LineageRelationship.Builder newBuilder(com.linkedin.pegasus2avro.metadata.graph.LineageRelationship.Builder other) {
    return new com.linkedin.pegasus2avro.metadata.graph.LineageRelationship.Builder(other);
  }
  
  /** Creates a new LineageRelationship RecordBuilder by copying an existing LineageRelationship instance */
  public static com.linkedin.pegasus2avro.metadata.graph.LineageRelationship.Builder newBuilder(com.linkedin.pegasus2avro.metadata.graph.LineageRelationship other) {
    return new com.linkedin.pegasus2avro.metadata.graph.LineageRelationship.Builder(other);
  }
  
  /**
   * RecordBuilder for LineageRelationship instances.
   */
  public static class Builder extends org.apache.avro.specific.SpecificRecordBuilderBase<LineageRelationship>
    implements org.apache.avro.data.RecordBuilder<LineageRelationship> {

    private java.lang.String type;
    private java.lang.String entity;
    private java.util.List<java.util.List<java.lang.String>> paths;
    private java.util.List<java.lang.String> path;
    private int degree;
    private java.lang.Long createdOn;
    private java.lang.String createdActor;
    private java.lang.Long updatedOn;
    private java.lang.String updatedActor;
    private java.lang.Boolean isManual;

    /** Creates a new Builder */
    private Builder() {
      super(com.linkedin.pegasus2avro.metadata.graph.LineageRelationship.SCHEMA$);
    }
    
    /** Creates a Builder by copying an existing Builder */
    private Builder(com.linkedin.pegasus2avro.metadata.graph.LineageRelationship.Builder other) {
      super(other);
      if (isValidValue(fields()[0], other.type)) {
        this.type = data().deepCopy(fields()[0].schema(), other.type);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.entity)) {
        this.entity = data().deepCopy(fields()[1].schema(), other.entity);
        fieldSetFlags()[1] = true;
      }
      if (isValidValue(fields()[2], other.paths)) {
        this.paths = data().deepCopy(fields()[2].schema(), other.paths);
        fieldSetFlags()[2] = true;
      }
      if (isValidValue(fields()[3], other.path)) {
        this.path = data().deepCopy(fields()[3].schema(), other.path);
        fieldSetFlags()[3] = true;
      }
      if (isValidValue(fields()[4], other.degree)) {
        this.degree = data().deepCopy(fields()[4].schema(), other.degree);
        fieldSetFlags()[4] = true;
      }
      if (isValidValue(fields()[5], other.createdOn)) {
        this.createdOn = data().deepCopy(fields()[5].schema(), other.createdOn);
        fieldSetFlags()[5] = true;
      }
      if (isValidValue(fields()[6], other.createdActor)) {
        this.createdActor = data().deepCopy(fields()[6].schema(), other.createdActor);
        fieldSetFlags()[6] = true;
      }
      if (isValidValue(fields()[7], other.updatedOn)) {
        this.updatedOn = data().deepCopy(fields()[7].schema(), other.updatedOn);
        fieldSetFlags()[7] = true;
      }
      if (isValidValue(fields()[8], other.updatedActor)) {
        this.updatedActor = data().deepCopy(fields()[8].schema(), other.updatedActor);
        fieldSetFlags()[8] = true;
      }
      if (isValidValue(fields()[9], other.isManual)) {
        this.isManual = data().deepCopy(fields()[9].schema(), other.isManual);
        fieldSetFlags()[9] = true;
      }
    }
    
    /** Creates a Builder by copying an existing LineageRelationship instance */
    private Builder(com.linkedin.pegasus2avro.metadata.graph.LineageRelationship other) {
            super(com.linkedin.pegasus2avro.metadata.graph.LineageRelationship.SCHEMA$);
      if (isValidValue(fields()[0], other.type)) {
        this.type = data().deepCopy(fields()[0].schema(), other.type);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.entity)) {
        this.entity = data().deepCopy(fields()[1].schema(), other.entity);
        fieldSetFlags()[1] = true;
      }
      if (isValidValue(fields()[2], other.paths)) {
        this.paths = data().deepCopy(fields()[2].schema(), other.paths);
        fieldSetFlags()[2] = true;
      }
      if (isValidValue(fields()[3], other.path)) {
        this.path = data().deepCopy(fields()[3].schema(), other.path);
        fieldSetFlags()[3] = true;
      }
      if (isValidValue(fields()[4], other.degree)) {
        this.degree = data().deepCopy(fields()[4].schema(), other.degree);
        fieldSetFlags()[4] = true;
      }
      if (isValidValue(fields()[5], other.createdOn)) {
        this.createdOn = data().deepCopy(fields()[5].schema(), other.createdOn);
        fieldSetFlags()[5] = true;
      }
      if (isValidValue(fields()[6], other.createdActor)) {
        this.createdActor = data().deepCopy(fields()[6].schema(), other.createdActor);
        fieldSetFlags()[6] = true;
      }
      if (isValidValue(fields()[7], other.updatedOn)) {
        this.updatedOn = data().deepCopy(fields()[7].schema(), other.updatedOn);
        fieldSetFlags()[7] = true;
      }
      if (isValidValue(fields()[8], other.updatedActor)) {
        this.updatedActor = data().deepCopy(fields()[8].schema(), other.updatedActor);
        fieldSetFlags()[8] = true;
      }
      if (isValidValue(fields()[9], other.isManual)) {
        this.isManual = data().deepCopy(fields()[9].schema(), other.isManual);
        fieldSetFlags()[9] = true;
      }
    }

    /** Gets the value of the 'type' field */
    public java.lang.String getType() {
      return type;
    }
    
    /** Sets the value of the 'type' field */
    public com.linkedin.pegasus2avro.metadata.graph.LineageRelationship.Builder setType(java.lang.String value) {
      validate(fields()[0], value);
      this.type = value;
      fieldSetFlags()[0] = true;
      return this; 
    }
    
    /** Checks whether the 'type' field has been set */
    public boolean hasType() {
      return fieldSetFlags()[0];
    }
    
    /** Clears the value of the 'type' field */
    public com.linkedin.pegasus2avro.metadata.graph.LineageRelationship.Builder clearType() {
      type = null;
      fieldSetFlags()[0] = false;
      return this;
    }

    /** Gets the value of the 'entity' field */
    public java.lang.String getEntity() {
      return entity;
    }
    
    /** Sets the value of the 'entity' field */
    public com.linkedin.pegasus2avro.metadata.graph.LineageRelationship.Builder setEntity(java.lang.String value) {
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
    public com.linkedin.pegasus2avro.metadata.graph.LineageRelationship.Builder clearEntity() {
      entity = null;
      fieldSetFlags()[1] = false;
      return this;
    }

    /** Gets the value of the 'paths' field */
    public java.util.List<java.util.List<java.lang.String>> getPaths() {
      return paths;
    }
    
    /** Sets the value of the 'paths' field */
    public com.linkedin.pegasus2avro.metadata.graph.LineageRelationship.Builder setPaths(java.util.List<java.util.List<java.lang.String>> value) {
      validate(fields()[2], value);
      this.paths = value;
      fieldSetFlags()[2] = true;
      return this; 
    }
    
    /** Checks whether the 'paths' field has been set */
    public boolean hasPaths() {
      return fieldSetFlags()[2];
    }
    
    /** Clears the value of the 'paths' field */
    public com.linkedin.pegasus2avro.metadata.graph.LineageRelationship.Builder clearPaths() {
      paths = null;
      fieldSetFlags()[2] = false;
      return this;
    }

    /** Gets the value of the 'path' field */
    public java.util.List<java.lang.String> getPath() {
      return path;
    }
    
    /** Sets the value of the 'path' field */
    public com.linkedin.pegasus2avro.metadata.graph.LineageRelationship.Builder setPath(java.util.List<java.lang.String> value) {
      validate(fields()[3], value);
      this.path = value;
      fieldSetFlags()[3] = true;
      return this; 
    }
    
    /** Checks whether the 'path' field has been set */
    public boolean hasPath() {
      return fieldSetFlags()[3];
    }
    
    /** Clears the value of the 'path' field */
    public com.linkedin.pegasus2avro.metadata.graph.LineageRelationship.Builder clearPath() {
      path = null;
      fieldSetFlags()[3] = false;
      return this;
    }

    /** Gets the value of the 'degree' field */
    public java.lang.Integer getDegree() {
      return degree;
    }
    
    /** Sets the value of the 'degree' field */
    public com.linkedin.pegasus2avro.metadata.graph.LineageRelationship.Builder setDegree(int value) {
      validate(fields()[4], value);
      this.degree = value;
      fieldSetFlags()[4] = true;
      return this; 
    }
    
    /** Checks whether the 'degree' field has been set */
    public boolean hasDegree() {
      return fieldSetFlags()[4];
    }
    
    /** Clears the value of the 'degree' field */
    public com.linkedin.pegasus2avro.metadata.graph.LineageRelationship.Builder clearDegree() {
      fieldSetFlags()[4] = false;
      return this;
    }

    /** Gets the value of the 'createdOn' field */
    public java.lang.Long getCreatedOn() {
      return createdOn;
    }
    
    /** Sets the value of the 'createdOn' field */
    public com.linkedin.pegasus2avro.metadata.graph.LineageRelationship.Builder setCreatedOn(java.lang.Long value) {
      validate(fields()[5], value);
      this.createdOn = value;
      fieldSetFlags()[5] = true;
      return this; 
    }
    
    /** Checks whether the 'createdOn' field has been set */
    public boolean hasCreatedOn() {
      return fieldSetFlags()[5];
    }
    
    /** Clears the value of the 'createdOn' field */
    public com.linkedin.pegasus2avro.metadata.graph.LineageRelationship.Builder clearCreatedOn() {
      createdOn = null;
      fieldSetFlags()[5] = false;
      return this;
    }

    /** Gets the value of the 'createdActor' field */
    public java.lang.String getCreatedActor() {
      return createdActor;
    }
    
    /** Sets the value of the 'createdActor' field */
    public com.linkedin.pegasus2avro.metadata.graph.LineageRelationship.Builder setCreatedActor(java.lang.String value) {
      validate(fields()[6], value);
      this.createdActor = value;
      fieldSetFlags()[6] = true;
      return this; 
    }
    
    /** Checks whether the 'createdActor' field has been set */
    public boolean hasCreatedActor() {
      return fieldSetFlags()[6];
    }
    
    /** Clears the value of the 'createdActor' field */
    public com.linkedin.pegasus2avro.metadata.graph.LineageRelationship.Builder clearCreatedActor() {
      createdActor = null;
      fieldSetFlags()[6] = false;
      return this;
    }

    /** Gets the value of the 'updatedOn' field */
    public java.lang.Long getUpdatedOn() {
      return updatedOn;
    }
    
    /** Sets the value of the 'updatedOn' field */
    public com.linkedin.pegasus2avro.metadata.graph.LineageRelationship.Builder setUpdatedOn(java.lang.Long value) {
      validate(fields()[7], value);
      this.updatedOn = value;
      fieldSetFlags()[7] = true;
      return this; 
    }
    
    /** Checks whether the 'updatedOn' field has been set */
    public boolean hasUpdatedOn() {
      return fieldSetFlags()[7];
    }
    
    /** Clears the value of the 'updatedOn' field */
    public com.linkedin.pegasus2avro.metadata.graph.LineageRelationship.Builder clearUpdatedOn() {
      updatedOn = null;
      fieldSetFlags()[7] = false;
      return this;
    }

    /** Gets the value of the 'updatedActor' field */
    public java.lang.String getUpdatedActor() {
      return updatedActor;
    }
    
    /** Sets the value of the 'updatedActor' field */
    public com.linkedin.pegasus2avro.metadata.graph.LineageRelationship.Builder setUpdatedActor(java.lang.String value) {
      validate(fields()[8], value);
      this.updatedActor = value;
      fieldSetFlags()[8] = true;
      return this; 
    }
    
    /** Checks whether the 'updatedActor' field has been set */
    public boolean hasUpdatedActor() {
      return fieldSetFlags()[8];
    }
    
    /** Clears the value of the 'updatedActor' field */
    public com.linkedin.pegasus2avro.metadata.graph.LineageRelationship.Builder clearUpdatedActor() {
      updatedActor = null;
      fieldSetFlags()[8] = false;
      return this;
    }

    /** Gets the value of the 'isManual' field */
    public java.lang.Boolean getIsManual() {
      return isManual;
    }
    
    /** Sets the value of the 'isManual' field */
    public com.linkedin.pegasus2avro.metadata.graph.LineageRelationship.Builder setIsManual(java.lang.Boolean value) {
      validate(fields()[9], value);
      this.isManual = value;
      fieldSetFlags()[9] = true;
      return this; 
    }
    
    /** Checks whether the 'isManual' field has been set */
    public boolean hasIsManual() {
      return fieldSetFlags()[9];
    }
    
    /** Clears the value of the 'isManual' field */
    public com.linkedin.pegasus2avro.metadata.graph.LineageRelationship.Builder clearIsManual() {
      isManual = null;
      fieldSetFlags()[9] = false;
      return this;
    }

    @Override
    public LineageRelationship build() {
      try {
        LineageRelationship record = new LineageRelationship();
        record.type = fieldSetFlags()[0] ? this.type : (java.lang.String) defaultValue(fields()[0]);
        record.entity = fieldSetFlags()[1] ? this.entity : (java.lang.String) defaultValue(fields()[1]);
        record.paths = fieldSetFlags()[2] ? this.paths : (java.util.List<java.util.List<java.lang.String>>) defaultValue(fields()[2]);
        record.path = fieldSetFlags()[3] ? this.path : (java.util.List<java.lang.String>) defaultValue(fields()[3]);
        record.degree = fieldSetFlags()[4] ? this.degree : (java.lang.Integer) defaultValue(fields()[4]);
        record.createdOn = fieldSetFlags()[5] ? this.createdOn : (java.lang.Long) defaultValue(fields()[5]);
        record.createdActor = fieldSetFlags()[6] ? this.createdActor : (java.lang.String) defaultValue(fields()[6]);
        record.updatedOn = fieldSetFlags()[7] ? this.updatedOn : (java.lang.Long) defaultValue(fields()[7]);
        record.updatedActor = fieldSetFlags()[8] ? this.updatedActor : (java.lang.String) defaultValue(fields()[8]);
        record.isManual = fieldSetFlags()[9] ? this.isManual : (java.lang.Boolean) defaultValue(fields()[9]);
        return record;
      } catch (Exception e) {
        throw new org.apache.avro.AvroRuntimeException(e);
      }
    }
  }
}
