/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */
package com.linkedin.pegasus2avro.dataset;  
@SuppressWarnings("all")
@org.apache.avro.specific.AvroGenerated
public class Quantile extends org.apache.avro.specific.SpecificRecordBase implements org.apache.avro.specific.SpecificRecord {
  public static final org.apache.avro.Schema SCHEMA$ = new org.apache.avro.Schema.Parser().parse("{\"type\":\"record\",\"name\":\"Quantile\",\"namespace\":\"com.linkedin.pegasus2avro.dataset\",\"fields\":[{\"name\":\"quantile\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"}},{\"name\":\"value\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"}}]}");
  public static org.apache.avro.Schema getClassSchema() { return SCHEMA$; }
  @Deprecated public java.lang.String quantile;
  @Deprecated public java.lang.String value;

  /**
   * Default constructor.  Note that this does not initialize fields
   * to their default values from the schema.  If that is desired then
   * one should use <code>newBuilder()</code>. 
   */
  public Quantile() {}

  /**
   * All-args constructor.
   */
  public Quantile(java.lang.String quantile, java.lang.String value) {
    this.quantile = quantile;
    this.value = value;
  }

  public org.apache.avro.Schema getSchema() { return SCHEMA$; }
  // Used by DatumWriter.  Applications should not call. 
  public java.lang.Object get(int field$) {
    switch (field$) {
    case 0: return quantile;
    case 1: return value;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }
  // Used by DatumReader.  Applications should not call. 
  @SuppressWarnings(value="unchecked")
  public void put(int field$, java.lang.Object value$) {
    switch (field$) {
    case 0: quantile = (java.lang.String)value$; break;
    case 1: value = (java.lang.String)value$; break;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }

  /**
   * Gets the value of the 'quantile' field.
   */
  public java.lang.String getQuantile() {
    return quantile;
  }

  /**
   * Sets the value of the 'quantile' field.
   * @param value the value to set.
   */
  public void setQuantile(java.lang.String value) {
    this.quantile = value;
  }

  /**
   * Gets the value of the 'value' field.
   */
  public java.lang.String getValue() {
    return value;
  }

  /**
   * Sets the value of the 'value' field.
   * @param value the value to set.
   */
  public void setValue(java.lang.String value) {
    this.value = value;
  }

  /** Creates a new Quantile RecordBuilder */
  public static com.linkedin.pegasus2avro.dataset.Quantile.Builder newBuilder() {
    return new com.linkedin.pegasus2avro.dataset.Quantile.Builder();
  }
  
  /** Creates a new Quantile RecordBuilder by copying an existing Builder */
  public static com.linkedin.pegasus2avro.dataset.Quantile.Builder newBuilder(com.linkedin.pegasus2avro.dataset.Quantile.Builder other) {
    return new com.linkedin.pegasus2avro.dataset.Quantile.Builder(other);
  }
  
  /** Creates a new Quantile RecordBuilder by copying an existing Quantile instance */
  public static com.linkedin.pegasus2avro.dataset.Quantile.Builder newBuilder(com.linkedin.pegasus2avro.dataset.Quantile other) {
    return new com.linkedin.pegasus2avro.dataset.Quantile.Builder(other);
  }
  
  /**
   * RecordBuilder for Quantile instances.
   */
  public static class Builder extends org.apache.avro.specific.SpecificRecordBuilderBase<Quantile>
    implements org.apache.avro.data.RecordBuilder<Quantile> {

    private java.lang.String quantile;
    private java.lang.String value;

    /** Creates a new Builder */
    private Builder() {
      super(com.linkedin.pegasus2avro.dataset.Quantile.SCHEMA$);
    }
    
    /** Creates a Builder by copying an existing Builder */
    private Builder(com.linkedin.pegasus2avro.dataset.Quantile.Builder other) {
      super(other);
      if (isValidValue(fields()[0], other.quantile)) {
        this.quantile = data().deepCopy(fields()[0].schema(), other.quantile);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.value)) {
        this.value = data().deepCopy(fields()[1].schema(), other.value);
        fieldSetFlags()[1] = true;
      }
    }
    
    /** Creates a Builder by copying an existing Quantile instance */
    private Builder(com.linkedin.pegasus2avro.dataset.Quantile other) {
            super(com.linkedin.pegasus2avro.dataset.Quantile.SCHEMA$);
      if (isValidValue(fields()[0], other.quantile)) {
        this.quantile = data().deepCopy(fields()[0].schema(), other.quantile);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.value)) {
        this.value = data().deepCopy(fields()[1].schema(), other.value);
        fieldSetFlags()[1] = true;
      }
    }

    /** Gets the value of the 'quantile' field */
    public java.lang.String getQuantile() {
      return quantile;
    }
    
    /** Sets the value of the 'quantile' field */
    public com.linkedin.pegasus2avro.dataset.Quantile.Builder setQuantile(java.lang.String value) {
      validate(fields()[0], value);
      this.quantile = value;
      fieldSetFlags()[0] = true;
      return this; 
    }
    
    /** Checks whether the 'quantile' field has been set */
    public boolean hasQuantile() {
      return fieldSetFlags()[0];
    }
    
    /** Clears the value of the 'quantile' field */
    public com.linkedin.pegasus2avro.dataset.Quantile.Builder clearQuantile() {
      quantile = null;
      fieldSetFlags()[0] = false;
      return this;
    }

    /** Gets the value of the 'value' field */
    public java.lang.String getValue() {
      return value;
    }
    
    /** Sets the value of the 'value' field */
    public com.linkedin.pegasus2avro.dataset.Quantile.Builder setValue(java.lang.String value) {
      validate(fields()[1], value);
      this.value = value;
      fieldSetFlags()[1] = true;
      return this; 
    }
    
    /** Checks whether the 'value' field has been set */
    public boolean hasValue() {
      return fieldSetFlags()[1];
    }
    
    /** Clears the value of the 'value' field */
    public com.linkedin.pegasus2avro.dataset.Quantile.Builder clearValue() {
      value = null;
      fieldSetFlags()[1] = false;
      return this;
    }

    @Override
    public Quantile build() {
      try {
        Quantile record = new Quantile();
        record.quantile = fieldSetFlags()[0] ? this.quantile : (java.lang.String) defaultValue(fields()[0]);
        record.value = fieldSetFlags()[1] ? this.value : (java.lang.String) defaultValue(fields()[1]);
        return record;
      } catch (Exception e) {
        throw new org.apache.avro.AvroRuntimeException(e);
      }
    }
  }
}
