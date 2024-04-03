/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */
package com.linkedin.pegasus2avro.dataset;  
@SuppressWarnings("all")
@org.apache.avro.specific.AvroGenerated
public class Histogram extends org.apache.avro.specific.SpecificRecordBase implements org.apache.avro.specific.SpecificRecord {
  public static final org.apache.avro.Schema SCHEMA$ = new org.apache.avro.Schema.Parser().parse("{\"type\":\"record\",\"name\":\"Histogram\",\"namespace\":\"com.linkedin.pegasus2avro.dataset\",\"fields\":[{\"name\":\"boundaries\",\"type\":{\"type\":\"array\",\"items\":{\"type\":\"string\",\"avro.java.string\":\"String\"}}},{\"name\":\"heights\",\"type\":{\"type\":\"array\",\"items\":\"float\"}}]}");
  public static org.apache.avro.Schema getClassSchema() { return SCHEMA$; }
  @Deprecated public java.util.List<java.lang.String> boundaries;
  @Deprecated public java.util.List<java.lang.Float> heights;

  /**
   * Default constructor.  Note that this does not initialize fields
   * to their default values from the schema.  If that is desired then
   * one should use <code>newBuilder()</code>. 
   */
  public Histogram() {}

  /**
   * All-args constructor.
   */
  public Histogram(java.util.List<java.lang.String> boundaries, java.util.List<java.lang.Float> heights) {
    this.boundaries = boundaries;
    this.heights = heights;
  }

  public org.apache.avro.Schema getSchema() { return SCHEMA$; }
  // Used by DatumWriter.  Applications should not call. 
  public java.lang.Object get(int field$) {
    switch (field$) {
    case 0: return boundaries;
    case 1: return heights;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }
  // Used by DatumReader.  Applications should not call. 
  @SuppressWarnings(value="unchecked")
  public void put(int field$, java.lang.Object value$) {
    switch (field$) {
    case 0: boundaries = (java.util.List<java.lang.String>)value$; break;
    case 1: heights = (java.util.List<java.lang.Float>)value$; break;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }

  /**
   * Gets the value of the 'boundaries' field.
   */
  public java.util.List<java.lang.String> getBoundaries() {
    return boundaries;
  }

  /**
   * Sets the value of the 'boundaries' field.
   * @param value the value to set.
   */
  public void setBoundaries(java.util.List<java.lang.String> value) {
    this.boundaries = value;
  }

  /**
   * Gets the value of the 'heights' field.
   */
  public java.util.List<java.lang.Float> getHeights() {
    return heights;
  }

  /**
   * Sets the value of the 'heights' field.
   * @param value the value to set.
   */
  public void setHeights(java.util.List<java.lang.Float> value) {
    this.heights = value;
  }

  /** Creates a new Histogram RecordBuilder */
  public static com.linkedin.pegasus2avro.dataset.Histogram.Builder newBuilder() {
    return new com.linkedin.pegasus2avro.dataset.Histogram.Builder();
  }
  
  /** Creates a new Histogram RecordBuilder by copying an existing Builder */
  public static com.linkedin.pegasus2avro.dataset.Histogram.Builder newBuilder(com.linkedin.pegasus2avro.dataset.Histogram.Builder other) {
    return new com.linkedin.pegasus2avro.dataset.Histogram.Builder(other);
  }
  
  /** Creates a new Histogram RecordBuilder by copying an existing Histogram instance */
  public static com.linkedin.pegasus2avro.dataset.Histogram.Builder newBuilder(com.linkedin.pegasus2avro.dataset.Histogram other) {
    return new com.linkedin.pegasus2avro.dataset.Histogram.Builder(other);
  }
  
  /**
   * RecordBuilder for Histogram instances.
   */
  public static class Builder extends org.apache.avro.specific.SpecificRecordBuilderBase<Histogram>
    implements org.apache.avro.data.RecordBuilder<Histogram> {

    private java.util.List<java.lang.String> boundaries;
    private java.util.List<java.lang.Float> heights;

    /** Creates a new Builder */
    private Builder() {
      super(com.linkedin.pegasus2avro.dataset.Histogram.SCHEMA$);
    }
    
    /** Creates a Builder by copying an existing Builder */
    private Builder(com.linkedin.pegasus2avro.dataset.Histogram.Builder other) {
      super(other);
      if (isValidValue(fields()[0], other.boundaries)) {
        this.boundaries = data().deepCopy(fields()[0].schema(), other.boundaries);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.heights)) {
        this.heights = data().deepCopy(fields()[1].schema(), other.heights);
        fieldSetFlags()[1] = true;
      }
    }
    
    /** Creates a Builder by copying an existing Histogram instance */
    private Builder(com.linkedin.pegasus2avro.dataset.Histogram other) {
            super(com.linkedin.pegasus2avro.dataset.Histogram.SCHEMA$);
      if (isValidValue(fields()[0], other.boundaries)) {
        this.boundaries = data().deepCopy(fields()[0].schema(), other.boundaries);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.heights)) {
        this.heights = data().deepCopy(fields()[1].schema(), other.heights);
        fieldSetFlags()[1] = true;
      }
    }

    /** Gets the value of the 'boundaries' field */
    public java.util.List<java.lang.String> getBoundaries() {
      return boundaries;
    }
    
    /** Sets the value of the 'boundaries' field */
    public com.linkedin.pegasus2avro.dataset.Histogram.Builder setBoundaries(java.util.List<java.lang.String> value) {
      validate(fields()[0], value);
      this.boundaries = value;
      fieldSetFlags()[0] = true;
      return this; 
    }
    
    /** Checks whether the 'boundaries' field has been set */
    public boolean hasBoundaries() {
      return fieldSetFlags()[0];
    }
    
    /** Clears the value of the 'boundaries' field */
    public com.linkedin.pegasus2avro.dataset.Histogram.Builder clearBoundaries() {
      boundaries = null;
      fieldSetFlags()[0] = false;
      return this;
    }

    /** Gets the value of the 'heights' field */
    public java.util.List<java.lang.Float> getHeights() {
      return heights;
    }
    
    /** Sets the value of the 'heights' field */
    public com.linkedin.pegasus2avro.dataset.Histogram.Builder setHeights(java.util.List<java.lang.Float> value) {
      validate(fields()[1], value);
      this.heights = value;
      fieldSetFlags()[1] = true;
      return this; 
    }
    
    /** Checks whether the 'heights' field has been set */
    public boolean hasHeights() {
      return fieldSetFlags()[1];
    }
    
    /** Clears the value of the 'heights' field */
    public com.linkedin.pegasus2avro.dataset.Histogram.Builder clearHeights() {
      heights = null;
      fieldSetFlags()[1] = false;
      return this;
    }

    @Override
    public Histogram build() {
      try {
        Histogram record = new Histogram();
        record.boundaries = fieldSetFlags()[0] ? this.boundaries : (java.util.List<java.lang.String>) defaultValue(fields()[0]);
        record.heights = fieldSetFlags()[1] ? this.heights : (java.util.List<java.lang.Float>) defaultValue(fields()[1]);
        return record;
      } catch (Exception e) {
        throw new org.apache.avro.AvroRuntimeException(e);
      }
    }
  }
}
