/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */
package com.linkedin.pegasus2avro.dataprocess;  
@SuppressWarnings("all")
/** Information about Data process relationships */
@org.apache.avro.specific.AvroGenerated
public class DataProcessInstanceRelationships extends org.apache.avro.specific.SpecificRecordBase implements org.apache.avro.specific.SpecificRecord {
  public static final org.apache.avro.Schema SCHEMA$ = new org.apache.avro.Schema.Parser().parse("{\"type\":\"record\",\"name\":\"DataProcessInstanceRelationships\",\"namespace\":\"com.linkedin.pegasus2avro.dataprocess\",\"doc\":\"Information about Data process relationships\",\"fields\":[{\"name\":\"parentTemplate\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"The parent entity whose run instance it is\",\"default\":null,\"Relationship\":{\"entityTypes\":[\"dataJob\",\"dataFlow\"],\"name\":\"InstanceOf\"},\"Searchable\":{\"/*\":{\"fieldName\":\"parentTemplate\",\"fieldType\":\"URN\",\"queryByDefault\":false}},\"java\":{\"class\":\"com.linkedin.pegasus2avro.common.urn.Urn\"}},{\"name\":\"parentInstance\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"The parent DataProcessInstance where it belongs to.\\nIf it is a Airflow Task then it should belong to an Airflow Dag run as well\\nwhich will be another DataProcessInstance\",\"default\":null,\"Relationship\":{\"entityTypes\":[\"dataProcessInstance\"],\"name\":\"ChildOf\"},\"Searchable\":{\"/*\":{\"fieldName\":\"parentInstance\",\"fieldType\":\"URN\",\"queryByDefault\":false}},\"java\":{\"class\":\"com.linkedin.pegasus2avro.common.urn.Urn\"}},{\"name\":\"upstreamInstances\",\"type\":{\"type\":\"array\",\"items\":{\"type\":\"string\",\"avro.java.string\":\"String\"}},\"doc\":\"Input DataProcessInstance which triggered this dataprocess instance\",\"Relationship\":{\"/*\":{\"entityTypes\":[\"dataProcessInstance\"],\"name\":\"UpstreamOf\"}},\"Searchable\":{\"/*\":{\"fieldName\":\"upstream\",\"fieldType\":\"URN\",\"numValuesFieldName\":\"numUpstreams\",\"queryByDefault\":false}}}],\"Aspect\":{\"name\":\"dataProcessInstanceRelationships\"}}");
  public static org.apache.avro.Schema getClassSchema() { return SCHEMA$; }
  /** The parent entity whose run instance it is */
  @Deprecated public java.lang.String parentTemplate;
  /** The parent DataProcessInstance where it belongs to.
If it is a Airflow Task then it should belong to an Airflow Dag run as well
which will be another DataProcessInstance */
  @Deprecated public java.lang.String parentInstance;
  /** Input DataProcessInstance which triggered this dataprocess instance */
  @Deprecated public java.util.List<java.lang.String> upstreamInstances;

  /**
   * Default constructor.  Note that this does not initialize fields
   * to their default values from the schema.  If that is desired then
   * one should use <code>newBuilder()</code>. 
   */
  public DataProcessInstanceRelationships() {}

  /**
   * All-args constructor.
   */
  public DataProcessInstanceRelationships(java.lang.String parentTemplate, java.lang.String parentInstance, java.util.List<java.lang.String> upstreamInstances) {
    this.parentTemplate = parentTemplate;
    this.parentInstance = parentInstance;
    this.upstreamInstances = upstreamInstances;
  }

  public org.apache.avro.Schema getSchema() { return SCHEMA$; }
  // Used by DatumWriter.  Applications should not call. 
  public java.lang.Object get(int field$) {
    switch (field$) {
    case 0: return parentTemplate;
    case 1: return parentInstance;
    case 2: return upstreamInstances;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }
  // Used by DatumReader.  Applications should not call. 
  @SuppressWarnings(value="unchecked")
  public void put(int field$, java.lang.Object value$) {
    switch (field$) {
    case 0: parentTemplate = (java.lang.String)value$; break;
    case 1: parentInstance = (java.lang.String)value$; break;
    case 2: upstreamInstances = (java.util.List<java.lang.String>)value$; break;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }

  /**
   * Gets the value of the 'parentTemplate' field.
   * The parent entity whose run instance it is   */
  public java.lang.String getParentTemplate() {
    return parentTemplate;
  }

  /**
   * Sets the value of the 'parentTemplate' field.
   * The parent entity whose run instance it is   * @param value the value to set.
   */
  public void setParentTemplate(java.lang.String value) {
    this.parentTemplate = value;
  }

  /**
   * Gets the value of the 'parentInstance' field.
   * The parent DataProcessInstance where it belongs to.
If it is a Airflow Task then it should belong to an Airflow Dag run as well
which will be another DataProcessInstance   */
  public java.lang.String getParentInstance() {
    return parentInstance;
  }

  /**
   * Sets the value of the 'parentInstance' field.
   * The parent DataProcessInstance where it belongs to.
If it is a Airflow Task then it should belong to an Airflow Dag run as well
which will be another DataProcessInstance   * @param value the value to set.
   */
  public void setParentInstance(java.lang.String value) {
    this.parentInstance = value;
  }

  /**
   * Gets the value of the 'upstreamInstances' field.
   * Input DataProcessInstance which triggered this dataprocess instance   */
  public java.util.List<java.lang.String> getUpstreamInstances() {
    return upstreamInstances;
  }

  /**
   * Sets the value of the 'upstreamInstances' field.
   * Input DataProcessInstance which triggered this dataprocess instance   * @param value the value to set.
   */
  public void setUpstreamInstances(java.util.List<java.lang.String> value) {
    this.upstreamInstances = value;
  }

  /** Creates a new DataProcessInstanceRelationships RecordBuilder */
  public static com.linkedin.pegasus2avro.dataprocess.DataProcessInstanceRelationships.Builder newBuilder() {
    return new com.linkedin.pegasus2avro.dataprocess.DataProcessInstanceRelationships.Builder();
  }
  
  /** Creates a new DataProcessInstanceRelationships RecordBuilder by copying an existing Builder */
  public static com.linkedin.pegasus2avro.dataprocess.DataProcessInstanceRelationships.Builder newBuilder(com.linkedin.pegasus2avro.dataprocess.DataProcessInstanceRelationships.Builder other) {
    return new com.linkedin.pegasus2avro.dataprocess.DataProcessInstanceRelationships.Builder(other);
  }
  
  /** Creates a new DataProcessInstanceRelationships RecordBuilder by copying an existing DataProcessInstanceRelationships instance */
  public static com.linkedin.pegasus2avro.dataprocess.DataProcessInstanceRelationships.Builder newBuilder(com.linkedin.pegasus2avro.dataprocess.DataProcessInstanceRelationships other) {
    return new com.linkedin.pegasus2avro.dataprocess.DataProcessInstanceRelationships.Builder(other);
  }
  
  /**
   * RecordBuilder for DataProcessInstanceRelationships instances.
   */
  public static class Builder extends org.apache.avro.specific.SpecificRecordBuilderBase<DataProcessInstanceRelationships>
    implements org.apache.avro.data.RecordBuilder<DataProcessInstanceRelationships> {

    private java.lang.String parentTemplate;
    private java.lang.String parentInstance;
    private java.util.List<java.lang.String> upstreamInstances;

    /** Creates a new Builder */
    private Builder() {
      super(com.linkedin.pegasus2avro.dataprocess.DataProcessInstanceRelationships.SCHEMA$);
    }
    
    /** Creates a Builder by copying an existing Builder */
    private Builder(com.linkedin.pegasus2avro.dataprocess.DataProcessInstanceRelationships.Builder other) {
      super(other);
      if (isValidValue(fields()[0], other.parentTemplate)) {
        this.parentTemplate = data().deepCopy(fields()[0].schema(), other.parentTemplate);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.parentInstance)) {
        this.parentInstance = data().deepCopy(fields()[1].schema(), other.parentInstance);
        fieldSetFlags()[1] = true;
      }
      if (isValidValue(fields()[2], other.upstreamInstances)) {
        this.upstreamInstances = data().deepCopy(fields()[2].schema(), other.upstreamInstances);
        fieldSetFlags()[2] = true;
      }
    }
    
    /** Creates a Builder by copying an existing DataProcessInstanceRelationships instance */
    private Builder(com.linkedin.pegasus2avro.dataprocess.DataProcessInstanceRelationships other) {
            super(com.linkedin.pegasus2avro.dataprocess.DataProcessInstanceRelationships.SCHEMA$);
      if (isValidValue(fields()[0], other.parentTemplate)) {
        this.parentTemplate = data().deepCopy(fields()[0].schema(), other.parentTemplate);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.parentInstance)) {
        this.parentInstance = data().deepCopy(fields()[1].schema(), other.parentInstance);
        fieldSetFlags()[1] = true;
      }
      if (isValidValue(fields()[2], other.upstreamInstances)) {
        this.upstreamInstances = data().deepCopy(fields()[2].schema(), other.upstreamInstances);
        fieldSetFlags()[2] = true;
      }
    }

    /** Gets the value of the 'parentTemplate' field */
    public java.lang.String getParentTemplate() {
      return parentTemplate;
    }
    
    /** Sets the value of the 'parentTemplate' field */
    public com.linkedin.pegasus2avro.dataprocess.DataProcessInstanceRelationships.Builder setParentTemplate(java.lang.String value) {
      validate(fields()[0], value);
      this.parentTemplate = value;
      fieldSetFlags()[0] = true;
      return this; 
    }
    
    /** Checks whether the 'parentTemplate' field has been set */
    public boolean hasParentTemplate() {
      return fieldSetFlags()[0];
    }
    
    /** Clears the value of the 'parentTemplate' field */
    public com.linkedin.pegasus2avro.dataprocess.DataProcessInstanceRelationships.Builder clearParentTemplate() {
      parentTemplate = null;
      fieldSetFlags()[0] = false;
      return this;
    }

    /** Gets the value of the 'parentInstance' field */
    public java.lang.String getParentInstance() {
      return parentInstance;
    }
    
    /** Sets the value of the 'parentInstance' field */
    public com.linkedin.pegasus2avro.dataprocess.DataProcessInstanceRelationships.Builder setParentInstance(java.lang.String value) {
      validate(fields()[1], value);
      this.parentInstance = value;
      fieldSetFlags()[1] = true;
      return this; 
    }
    
    /** Checks whether the 'parentInstance' field has been set */
    public boolean hasParentInstance() {
      return fieldSetFlags()[1];
    }
    
    /** Clears the value of the 'parentInstance' field */
    public com.linkedin.pegasus2avro.dataprocess.DataProcessInstanceRelationships.Builder clearParentInstance() {
      parentInstance = null;
      fieldSetFlags()[1] = false;
      return this;
    }

    /** Gets the value of the 'upstreamInstances' field */
    public java.util.List<java.lang.String> getUpstreamInstances() {
      return upstreamInstances;
    }
    
    /** Sets the value of the 'upstreamInstances' field */
    public com.linkedin.pegasus2avro.dataprocess.DataProcessInstanceRelationships.Builder setUpstreamInstances(java.util.List<java.lang.String> value) {
      validate(fields()[2], value);
      this.upstreamInstances = value;
      fieldSetFlags()[2] = true;
      return this; 
    }
    
    /** Checks whether the 'upstreamInstances' field has been set */
    public boolean hasUpstreamInstances() {
      return fieldSetFlags()[2];
    }
    
    /** Clears the value of the 'upstreamInstances' field */
    public com.linkedin.pegasus2avro.dataprocess.DataProcessInstanceRelationships.Builder clearUpstreamInstances() {
      upstreamInstances = null;
      fieldSetFlags()[2] = false;
      return this;
    }

    @Override
    public DataProcessInstanceRelationships build() {
      try {
        DataProcessInstanceRelationships record = new DataProcessInstanceRelationships();
        record.parentTemplate = fieldSetFlags()[0] ? this.parentTemplate : (java.lang.String) defaultValue(fields()[0]);
        record.parentInstance = fieldSetFlags()[1] ? this.parentInstance : (java.lang.String) defaultValue(fields()[1]);
        record.upstreamInstances = fieldSetFlags()[2] ? this.upstreamInstances : (java.util.List<java.lang.String>) defaultValue(fields()[2]);
        return record;
      } catch (Exception e) {
        throw new org.apache.avro.AvroRuntimeException(e);
      }
    }
  }
}
