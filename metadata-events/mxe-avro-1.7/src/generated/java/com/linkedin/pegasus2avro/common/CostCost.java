/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */
package com.linkedin.pegasus2avro.common;  
@SuppressWarnings("all")
@org.apache.avro.specific.AvroGenerated
public class CostCost extends org.apache.avro.specific.SpecificRecordBase implements org.apache.avro.specific.SpecificRecord {
  public static final org.apache.avro.Schema SCHEMA$ = new org.apache.avro.Schema.Parser().parse("{\"type\":\"record\",\"name\":\"CostCost\",\"namespace\":\"com.linkedin.pegasus2avro.common\",\"fields\":[{\"name\":\"costId\",\"type\":[\"null\",\"double\"],\"default\":null},{\"name\":\"costCode\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"default\":null},{\"name\":\"fieldDiscriminator\",\"type\":{\"type\":\"enum\",\"name\":\"CostCostDiscriminator\",\"symbols\":[\"costId\",\"costCode\"]},\"doc\":\"Contains the name of the field that has its value set.\"}]}");
  public static org.apache.avro.Schema getClassSchema() { return SCHEMA$; }
  @Deprecated public java.lang.Double costId;
  @Deprecated public java.lang.String costCode;
  /** Contains the name of the field that has its value set. */
  @Deprecated public com.linkedin.pegasus2avro.common.CostCostDiscriminator fieldDiscriminator;

  /**
   * Default constructor.  Note that this does not initialize fields
   * to their default values from the schema.  If that is desired then
   * one should use <code>newBuilder()</code>. 
   */
  public CostCost() {}

  /**
   * All-args constructor.
   */
  public CostCost(java.lang.Double costId, java.lang.String costCode, com.linkedin.pegasus2avro.common.CostCostDiscriminator fieldDiscriminator) {
    this.costId = costId;
    this.costCode = costCode;
    this.fieldDiscriminator = fieldDiscriminator;
  }

  public org.apache.avro.Schema getSchema() { return SCHEMA$; }
  // Used by DatumWriter.  Applications should not call. 
  public java.lang.Object get(int field$) {
    switch (field$) {
    case 0: return costId;
    case 1: return costCode;
    case 2: return fieldDiscriminator;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }
  // Used by DatumReader.  Applications should not call. 
  @SuppressWarnings(value="unchecked")
  public void put(int field$, java.lang.Object value$) {
    switch (field$) {
    case 0: costId = (java.lang.Double)value$; break;
    case 1: costCode = (java.lang.String)value$; break;
    case 2: fieldDiscriminator = (com.linkedin.pegasus2avro.common.CostCostDiscriminator)value$; break;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }

  /**
   * Gets the value of the 'costId' field.
   */
  public java.lang.Double getCostId() {
    return costId;
  }

  /**
   * Sets the value of the 'costId' field.
   * @param value the value to set.
   */
  public void setCostId(java.lang.Double value) {
    this.costId = value;
  }

  /**
   * Gets the value of the 'costCode' field.
   */
  public java.lang.String getCostCode() {
    return costCode;
  }

  /**
   * Sets the value of the 'costCode' field.
   * @param value the value to set.
   */
  public void setCostCode(java.lang.String value) {
    this.costCode = value;
  }

  /**
   * Gets the value of the 'fieldDiscriminator' field.
   * Contains the name of the field that has its value set.   */
  public com.linkedin.pegasus2avro.common.CostCostDiscriminator getFieldDiscriminator() {
    return fieldDiscriminator;
  }

  /**
   * Sets the value of the 'fieldDiscriminator' field.
   * Contains the name of the field that has its value set.   * @param value the value to set.
   */
  public void setFieldDiscriminator(com.linkedin.pegasus2avro.common.CostCostDiscriminator value) {
    this.fieldDiscriminator = value;
  }

  /** Creates a new CostCost RecordBuilder */
  public static com.linkedin.pegasus2avro.common.CostCost.Builder newBuilder() {
    return new com.linkedin.pegasus2avro.common.CostCost.Builder();
  }
  
  /** Creates a new CostCost RecordBuilder by copying an existing Builder */
  public static com.linkedin.pegasus2avro.common.CostCost.Builder newBuilder(com.linkedin.pegasus2avro.common.CostCost.Builder other) {
    return new com.linkedin.pegasus2avro.common.CostCost.Builder(other);
  }
  
  /** Creates a new CostCost RecordBuilder by copying an existing CostCost instance */
  public static com.linkedin.pegasus2avro.common.CostCost.Builder newBuilder(com.linkedin.pegasus2avro.common.CostCost other) {
    return new com.linkedin.pegasus2avro.common.CostCost.Builder(other);
  }
  
  /**
   * RecordBuilder for CostCost instances.
   */
  public static class Builder extends org.apache.avro.specific.SpecificRecordBuilderBase<CostCost>
    implements org.apache.avro.data.RecordBuilder<CostCost> {

    private java.lang.Double costId;
    private java.lang.String costCode;
    private com.linkedin.pegasus2avro.common.CostCostDiscriminator fieldDiscriminator;

    /** Creates a new Builder */
    private Builder() {
      super(com.linkedin.pegasus2avro.common.CostCost.SCHEMA$);
    }
    
    /** Creates a Builder by copying an existing Builder */
    private Builder(com.linkedin.pegasus2avro.common.CostCost.Builder other) {
      super(other);
      if (isValidValue(fields()[0], other.costId)) {
        this.costId = data().deepCopy(fields()[0].schema(), other.costId);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.costCode)) {
        this.costCode = data().deepCopy(fields()[1].schema(), other.costCode);
        fieldSetFlags()[1] = true;
      }
      if (isValidValue(fields()[2], other.fieldDiscriminator)) {
        this.fieldDiscriminator = data().deepCopy(fields()[2].schema(), other.fieldDiscriminator);
        fieldSetFlags()[2] = true;
      }
    }
    
    /** Creates a Builder by copying an existing CostCost instance */
    private Builder(com.linkedin.pegasus2avro.common.CostCost other) {
            super(com.linkedin.pegasus2avro.common.CostCost.SCHEMA$);
      if (isValidValue(fields()[0], other.costId)) {
        this.costId = data().deepCopy(fields()[0].schema(), other.costId);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.costCode)) {
        this.costCode = data().deepCopy(fields()[1].schema(), other.costCode);
        fieldSetFlags()[1] = true;
      }
      if (isValidValue(fields()[2], other.fieldDiscriminator)) {
        this.fieldDiscriminator = data().deepCopy(fields()[2].schema(), other.fieldDiscriminator);
        fieldSetFlags()[2] = true;
      }
    }

    /** Gets the value of the 'costId' field */
    public java.lang.Double getCostId() {
      return costId;
    }
    
    /** Sets the value of the 'costId' field */
    public com.linkedin.pegasus2avro.common.CostCost.Builder setCostId(java.lang.Double value) {
      validate(fields()[0], value);
      this.costId = value;
      fieldSetFlags()[0] = true;
      return this; 
    }
    
    /** Checks whether the 'costId' field has been set */
    public boolean hasCostId() {
      return fieldSetFlags()[0];
    }
    
    /** Clears the value of the 'costId' field */
    public com.linkedin.pegasus2avro.common.CostCost.Builder clearCostId() {
      costId = null;
      fieldSetFlags()[0] = false;
      return this;
    }

    /** Gets the value of the 'costCode' field */
    public java.lang.String getCostCode() {
      return costCode;
    }
    
    /** Sets the value of the 'costCode' field */
    public com.linkedin.pegasus2avro.common.CostCost.Builder setCostCode(java.lang.String value) {
      validate(fields()[1], value);
      this.costCode = value;
      fieldSetFlags()[1] = true;
      return this; 
    }
    
    /** Checks whether the 'costCode' field has been set */
    public boolean hasCostCode() {
      return fieldSetFlags()[1];
    }
    
    /** Clears the value of the 'costCode' field */
    public com.linkedin.pegasus2avro.common.CostCost.Builder clearCostCode() {
      costCode = null;
      fieldSetFlags()[1] = false;
      return this;
    }

    /** Gets the value of the 'fieldDiscriminator' field */
    public com.linkedin.pegasus2avro.common.CostCostDiscriminator getFieldDiscriminator() {
      return fieldDiscriminator;
    }
    
    /** Sets the value of the 'fieldDiscriminator' field */
    public com.linkedin.pegasus2avro.common.CostCost.Builder setFieldDiscriminator(com.linkedin.pegasus2avro.common.CostCostDiscriminator value) {
      validate(fields()[2], value);
      this.fieldDiscriminator = value;
      fieldSetFlags()[2] = true;
      return this; 
    }
    
    /** Checks whether the 'fieldDiscriminator' field has been set */
    public boolean hasFieldDiscriminator() {
      return fieldSetFlags()[2];
    }
    
    /** Clears the value of the 'fieldDiscriminator' field */
    public com.linkedin.pegasus2avro.common.CostCost.Builder clearFieldDiscriminator() {
      fieldDiscriminator = null;
      fieldSetFlags()[2] = false;
      return this;
    }

    @Override
    public CostCost build() {
      try {
        CostCost record = new CostCost();
        record.costId = fieldSetFlags()[0] ? this.costId : (java.lang.Double) defaultValue(fields()[0]);
        record.costCode = fieldSetFlags()[1] ? this.costCode : (java.lang.String) defaultValue(fields()[1]);
        record.fieldDiscriminator = fieldSetFlags()[2] ? this.fieldDiscriminator : (com.linkedin.pegasus2avro.common.CostCostDiscriminator) defaultValue(fields()[2]);
        return record;
      } catch (Exception e) {
        throw new org.apache.avro.AvroRuntimeException(e);
      }
    }
  }
}
