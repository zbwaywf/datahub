/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */
package com.linkedin.pegasus2avro.policy;  
@SuppressWarnings("all")
/** A criterion for matching a field with given value */
@org.apache.avro.specific.AvroGenerated
public class PolicyMatchCriterion extends org.apache.avro.specific.SpecificRecordBase implements org.apache.avro.specific.SpecificRecord {
  public static final org.apache.avro.Schema SCHEMA$ = new org.apache.avro.Schema.Parser().parse("{\"type\":\"record\",\"name\":\"PolicyMatchCriterion\",\"namespace\":\"com.linkedin.pegasus2avro.policy\",\"doc\":\"A criterion for matching a field with given value\",\"fields\":[{\"name\":\"field\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"The name of the field that the criterion refers to\"},{\"name\":\"values\",\"type\":{\"type\":\"array\",\"items\":{\"type\":\"string\",\"avro.java.string\":\"String\"}},\"doc\":\"Values. Matches criterion if any one of the values matches condition (OR-relationship)\"},{\"name\":\"condition\",\"type\":{\"type\":\"enum\",\"name\":\"PolicyMatchCondition\",\"doc\":\"The matching condition in a filter criterion\",\"symbols\":[\"EQUALS\"],\"symbolDocs\":{\"EQUALS\":\"Whether the field matches the value\"}},\"doc\":\"The condition for the criterion\",\"default\":\"EQUALS\"}]}");
  public static org.apache.avro.Schema getClassSchema() { return SCHEMA$; }
  /** The name of the field that the criterion refers to */
  @Deprecated public java.lang.String field;
  /** Values. Matches criterion if any one of the values matches condition (OR-relationship) */
  @Deprecated public java.util.List<java.lang.String> values;
  /** The condition for the criterion */
  @Deprecated public com.linkedin.pegasus2avro.policy.PolicyMatchCondition condition;

  /**
   * Default constructor.  Note that this does not initialize fields
   * to their default values from the schema.  If that is desired then
   * one should use <code>newBuilder()</code>. 
   */
  public PolicyMatchCriterion() {}

  /**
   * All-args constructor.
   */
  public PolicyMatchCriterion(java.lang.String field, java.util.List<java.lang.String> values, com.linkedin.pegasus2avro.policy.PolicyMatchCondition condition) {
    this.field = field;
    this.values = values;
    this.condition = condition;
  }

  public org.apache.avro.Schema getSchema() { return SCHEMA$; }
  // Used by DatumWriter.  Applications should not call. 
  public java.lang.Object get(int field$) {
    switch (field$) {
    case 0: return field;
    case 1: return values;
    case 2: return condition;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }
  // Used by DatumReader.  Applications should not call. 
  @SuppressWarnings(value="unchecked")
  public void put(int field$, java.lang.Object value$) {
    switch (field$) {
    case 0: field = (java.lang.String)value$; break;
    case 1: values = (java.util.List<java.lang.String>)value$; break;
    case 2: condition = (com.linkedin.pegasus2avro.policy.PolicyMatchCondition)value$; break;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }

  /**
   * Gets the value of the 'field' field.
   * The name of the field that the criterion refers to   */
  public java.lang.String getField() {
    return field;
  }

  /**
   * Sets the value of the 'field' field.
   * The name of the field that the criterion refers to   * @param value the value to set.
   */
  public void setField(java.lang.String value) {
    this.field = value;
  }

  /**
   * Gets the value of the 'values' field.
   * Values. Matches criterion if any one of the values matches condition (OR-relationship)   */
  public java.util.List<java.lang.String> getValues() {
    return values;
  }

  /**
   * Sets the value of the 'values' field.
   * Values. Matches criterion if any one of the values matches condition (OR-relationship)   * @param value the value to set.
   */
  public void setValues(java.util.List<java.lang.String> value) {
    this.values = value;
  }

  /**
   * Gets the value of the 'condition' field.
   * The condition for the criterion   */
  public com.linkedin.pegasus2avro.policy.PolicyMatchCondition getCondition() {
    return condition;
  }

  /**
   * Sets the value of the 'condition' field.
   * The condition for the criterion   * @param value the value to set.
   */
  public void setCondition(com.linkedin.pegasus2avro.policy.PolicyMatchCondition value) {
    this.condition = value;
  }

  /** Creates a new PolicyMatchCriterion RecordBuilder */
  public static com.linkedin.pegasus2avro.policy.PolicyMatchCriterion.Builder newBuilder() {
    return new com.linkedin.pegasus2avro.policy.PolicyMatchCriterion.Builder();
  }
  
  /** Creates a new PolicyMatchCriterion RecordBuilder by copying an existing Builder */
  public static com.linkedin.pegasus2avro.policy.PolicyMatchCriterion.Builder newBuilder(com.linkedin.pegasus2avro.policy.PolicyMatchCriterion.Builder other) {
    return new com.linkedin.pegasus2avro.policy.PolicyMatchCriterion.Builder(other);
  }
  
  /** Creates a new PolicyMatchCriterion RecordBuilder by copying an existing PolicyMatchCriterion instance */
  public static com.linkedin.pegasus2avro.policy.PolicyMatchCriterion.Builder newBuilder(com.linkedin.pegasus2avro.policy.PolicyMatchCriterion other) {
    return new com.linkedin.pegasus2avro.policy.PolicyMatchCriterion.Builder(other);
  }
  
  /**
   * RecordBuilder for PolicyMatchCriterion instances.
   */
  public static class Builder extends org.apache.avro.specific.SpecificRecordBuilderBase<PolicyMatchCriterion>
    implements org.apache.avro.data.RecordBuilder<PolicyMatchCriterion> {

    private java.lang.String field;
    private java.util.List<java.lang.String> values;
    private com.linkedin.pegasus2avro.policy.PolicyMatchCondition condition;

    /** Creates a new Builder */
    private Builder() {
      super(com.linkedin.pegasus2avro.policy.PolicyMatchCriterion.SCHEMA$);
    }
    
    /** Creates a Builder by copying an existing Builder */
    private Builder(com.linkedin.pegasus2avro.policy.PolicyMatchCriterion.Builder other) {
      super(other);
      if (isValidValue(fields()[0], other.field)) {
        this.field = data().deepCopy(fields()[0].schema(), other.field);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.values)) {
        this.values = data().deepCopy(fields()[1].schema(), other.values);
        fieldSetFlags()[1] = true;
      }
      if (isValidValue(fields()[2], other.condition)) {
        this.condition = data().deepCopy(fields()[2].schema(), other.condition);
        fieldSetFlags()[2] = true;
      }
    }
    
    /** Creates a Builder by copying an existing PolicyMatchCriterion instance */
    private Builder(com.linkedin.pegasus2avro.policy.PolicyMatchCriterion other) {
            super(com.linkedin.pegasus2avro.policy.PolicyMatchCriterion.SCHEMA$);
      if (isValidValue(fields()[0], other.field)) {
        this.field = data().deepCopy(fields()[0].schema(), other.field);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.values)) {
        this.values = data().deepCopy(fields()[1].schema(), other.values);
        fieldSetFlags()[1] = true;
      }
      if (isValidValue(fields()[2], other.condition)) {
        this.condition = data().deepCopy(fields()[2].schema(), other.condition);
        fieldSetFlags()[2] = true;
      }
    }

    /** Gets the value of the 'field' field */
    public java.lang.String getField() {
      return field;
    }
    
    /** Sets the value of the 'field' field */
    public com.linkedin.pegasus2avro.policy.PolicyMatchCriterion.Builder setField(java.lang.String value) {
      validate(fields()[0], value);
      this.field = value;
      fieldSetFlags()[0] = true;
      return this; 
    }
    
    /** Checks whether the 'field' field has been set */
    public boolean hasField() {
      return fieldSetFlags()[0];
    }
    
    /** Clears the value of the 'field' field */
    public com.linkedin.pegasus2avro.policy.PolicyMatchCriterion.Builder clearField() {
      field = null;
      fieldSetFlags()[0] = false;
      return this;
    }

    /** Gets the value of the 'values' field */
    public java.util.List<java.lang.String> getValues() {
      return values;
    }
    
    /** Sets the value of the 'values' field */
    public com.linkedin.pegasus2avro.policy.PolicyMatchCriterion.Builder setValues(java.util.List<java.lang.String> value) {
      validate(fields()[1], value);
      this.values = value;
      fieldSetFlags()[1] = true;
      return this; 
    }
    
    /** Checks whether the 'values' field has been set */
    public boolean hasValues() {
      return fieldSetFlags()[1];
    }
    
    /** Clears the value of the 'values' field */
    public com.linkedin.pegasus2avro.policy.PolicyMatchCriterion.Builder clearValues() {
      values = null;
      fieldSetFlags()[1] = false;
      return this;
    }

    /** Gets the value of the 'condition' field */
    public com.linkedin.pegasus2avro.policy.PolicyMatchCondition getCondition() {
      return condition;
    }
    
    /** Sets the value of the 'condition' field */
    public com.linkedin.pegasus2avro.policy.PolicyMatchCriterion.Builder setCondition(com.linkedin.pegasus2avro.policy.PolicyMatchCondition value) {
      validate(fields()[2], value);
      this.condition = value;
      fieldSetFlags()[2] = true;
      return this; 
    }
    
    /** Checks whether the 'condition' field has been set */
    public boolean hasCondition() {
      return fieldSetFlags()[2];
    }
    
    /** Clears the value of the 'condition' field */
    public com.linkedin.pegasus2avro.policy.PolicyMatchCriterion.Builder clearCondition() {
      condition = null;
      fieldSetFlags()[2] = false;
      return this;
    }

    @Override
    public PolicyMatchCriterion build() {
      try {
        PolicyMatchCriterion record = new PolicyMatchCriterion();
        record.field = fieldSetFlags()[0] ? this.field : (java.lang.String) defaultValue(fields()[0]);
        record.values = fieldSetFlags()[1] ? this.values : (java.util.List<java.lang.String>) defaultValue(fields()[1]);
        record.condition = fieldSetFlags()[2] ? this.condition : (com.linkedin.pegasus2avro.policy.PolicyMatchCondition) defaultValue(fields()[2]);
        return record;
      } catch (Exception e) {
        throw new org.apache.avro.AvroRuntimeException(e);
      }
    }
  }
}
