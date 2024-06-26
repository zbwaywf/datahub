/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */
package com.linkedin.pegasus2avro.schema;  
@SuppressWarnings("all")
/** Schema holder for oracle data definition language that describes an oracle table. */
@org.apache.avro.specific.AvroGenerated
public class OracleDDL extends org.apache.avro.specific.SpecificRecordBase implements org.apache.avro.specific.SpecificRecord {
  public static final org.apache.avro.Schema SCHEMA$ = new org.apache.avro.Schema.Parser().parse("{\"type\":\"record\",\"name\":\"OracleDDL\",\"namespace\":\"com.linkedin.pegasus2avro.schema\",\"doc\":\"Schema holder for oracle data definition language that describes an oracle table.\",\"fields\":[{\"name\":\"tableSchema\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"The native schema in the dataset's platform. This is a human readable (json blob) table schema.\"}]}");
  public static org.apache.avro.Schema getClassSchema() { return SCHEMA$; }
  /** The native schema in the dataset's platform. This is a human readable (json blob) table schema. */
  @Deprecated public java.lang.String tableSchema;

  /**
   * Default constructor.  Note that this does not initialize fields
   * to their default values from the schema.  If that is desired then
   * one should use <code>newBuilder()</code>. 
   */
  public OracleDDL() {}

  /**
   * All-args constructor.
   */
  public OracleDDL(java.lang.String tableSchema) {
    this.tableSchema = tableSchema;
  }

  public org.apache.avro.Schema getSchema() { return SCHEMA$; }
  // Used by DatumWriter.  Applications should not call. 
  public java.lang.Object get(int field$) {
    switch (field$) {
    case 0: return tableSchema;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }
  // Used by DatumReader.  Applications should not call. 
  @SuppressWarnings(value="unchecked")
  public void put(int field$, java.lang.Object value$) {
    switch (field$) {
    case 0: tableSchema = (java.lang.String)value$; break;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }

  /**
   * Gets the value of the 'tableSchema' field.
   * The native schema in the dataset's platform. This is a human readable (json blob) table schema.   */
  public java.lang.String getTableSchema() {
    return tableSchema;
  }

  /**
   * Sets the value of the 'tableSchema' field.
   * The native schema in the dataset's platform. This is a human readable (json blob) table schema.   * @param value the value to set.
   */
  public void setTableSchema(java.lang.String value) {
    this.tableSchema = value;
  }

  /** Creates a new OracleDDL RecordBuilder */
  public static com.linkedin.pegasus2avro.schema.OracleDDL.Builder newBuilder() {
    return new com.linkedin.pegasus2avro.schema.OracleDDL.Builder();
  }
  
  /** Creates a new OracleDDL RecordBuilder by copying an existing Builder */
  public static com.linkedin.pegasus2avro.schema.OracleDDL.Builder newBuilder(com.linkedin.pegasus2avro.schema.OracleDDL.Builder other) {
    return new com.linkedin.pegasus2avro.schema.OracleDDL.Builder(other);
  }
  
  /** Creates a new OracleDDL RecordBuilder by copying an existing OracleDDL instance */
  public static com.linkedin.pegasus2avro.schema.OracleDDL.Builder newBuilder(com.linkedin.pegasus2avro.schema.OracleDDL other) {
    return new com.linkedin.pegasus2avro.schema.OracleDDL.Builder(other);
  }
  
  /**
   * RecordBuilder for OracleDDL instances.
   */
  public static class Builder extends org.apache.avro.specific.SpecificRecordBuilderBase<OracleDDL>
    implements org.apache.avro.data.RecordBuilder<OracleDDL> {

    private java.lang.String tableSchema;

    /** Creates a new Builder */
    private Builder() {
      super(com.linkedin.pegasus2avro.schema.OracleDDL.SCHEMA$);
    }
    
    /** Creates a Builder by copying an existing Builder */
    private Builder(com.linkedin.pegasus2avro.schema.OracleDDL.Builder other) {
      super(other);
      if (isValidValue(fields()[0], other.tableSchema)) {
        this.tableSchema = data().deepCopy(fields()[0].schema(), other.tableSchema);
        fieldSetFlags()[0] = true;
      }
    }
    
    /** Creates a Builder by copying an existing OracleDDL instance */
    private Builder(com.linkedin.pegasus2avro.schema.OracleDDL other) {
            super(com.linkedin.pegasus2avro.schema.OracleDDL.SCHEMA$);
      if (isValidValue(fields()[0], other.tableSchema)) {
        this.tableSchema = data().deepCopy(fields()[0].schema(), other.tableSchema);
        fieldSetFlags()[0] = true;
      }
    }

    /** Gets the value of the 'tableSchema' field */
    public java.lang.String getTableSchema() {
      return tableSchema;
    }
    
    /** Sets the value of the 'tableSchema' field */
    public com.linkedin.pegasus2avro.schema.OracleDDL.Builder setTableSchema(java.lang.String value) {
      validate(fields()[0], value);
      this.tableSchema = value;
      fieldSetFlags()[0] = true;
      return this; 
    }
    
    /** Checks whether the 'tableSchema' field has been set */
    public boolean hasTableSchema() {
      return fieldSetFlags()[0];
    }
    
    /** Clears the value of the 'tableSchema' field */
    public com.linkedin.pegasus2avro.schema.OracleDDL.Builder clearTableSchema() {
      tableSchema = null;
      fieldSetFlags()[0] = false;
      return this;
    }

    @Override
    public OracleDDL build() {
      try {
        OracleDDL record = new OracleDDL();
        record.tableSchema = fieldSetFlags()[0] ? this.tableSchema : (java.lang.String) defaultValue(fields()[0]);
        return record;
      } catch (Exception e) {
        throw new org.apache.avro.AvroRuntimeException(e);
      }
    }
  }
}
