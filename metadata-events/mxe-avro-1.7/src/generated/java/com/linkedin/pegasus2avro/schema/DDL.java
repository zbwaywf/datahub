/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */
package com.linkedin.pegasus2avro.schema;  
@SuppressWarnings("all")
/** Schema text for the data definition language that describes an Relational DBMS table. */
@org.apache.avro.specific.AvroGenerated
public class DDL extends org.apache.avro.specific.SpecificRecordBase implements org.apache.avro.specific.SpecificRecord {
  public static final org.apache.avro.Schema SCHEMA$ = new org.apache.avro.Schema.Parser().parse("{\"type\":\"record\",\"name\":\"DDL\",\"namespace\":\"com.linkedin.pegasus2avro.schema\",\"doc\":\"Schema text for the data definition language that describes an Relational DBMS table.\",\"fields\":[{\"name\":\"tableDDL\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"The native SQL DDL that describe an Relational DBMS table.\"}]}");
  public static org.apache.avro.Schema getClassSchema() { return SCHEMA$; }
  /** The native SQL DDL that describe an Relational DBMS table. */
  @Deprecated public java.lang.String tableDDL;

  /**
   * Default constructor.  Note that this does not initialize fields
   * to their default values from the schema.  If that is desired then
   * one should use <code>newBuilder()</code>. 
   */
  public DDL() {}

  /**
   * All-args constructor.
   */
  public DDL(java.lang.String tableDDL) {
    this.tableDDL = tableDDL;
  }

  public org.apache.avro.Schema getSchema() { return SCHEMA$; }
  // Used by DatumWriter.  Applications should not call. 
  public java.lang.Object get(int field$) {
    switch (field$) {
    case 0: return tableDDL;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }
  // Used by DatumReader.  Applications should not call. 
  @SuppressWarnings(value="unchecked")
  public void put(int field$, java.lang.Object value$) {
    switch (field$) {
    case 0: tableDDL = (java.lang.String)value$; break;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }

  /**
   * Gets the value of the 'tableDDL' field.
   * The native SQL DDL that describe an Relational DBMS table.   */
  public java.lang.String getTableDDL() {
    return tableDDL;
  }

  /**
   * Sets the value of the 'tableDDL' field.
   * The native SQL DDL that describe an Relational DBMS table.   * @param value the value to set.
   */
  public void setTableDDL(java.lang.String value) {
    this.tableDDL = value;
  }

  /** Creates a new DDL RecordBuilder */
  public static com.linkedin.pegasus2avro.schema.DDL.Builder newBuilder() {
    return new com.linkedin.pegasus2avro.schema.DDL.Builder();
  }
  
  /** Creates a new DDL RecordBuilder by copying an existing Builder */
  public static com.linkedin.pegasus2avro.schema.DDL.Builder newBuilder(com.linkedin.pegasus2avro.schema.DDL.Builder other) {
    return new com.linkedin.pegasus2avro.schema.DDL.Builder(other);
  }
  
  /** Creates a new DDL RecordBuilder by copying an existing DDL instance */
  public static com.linkedin.pegasus2avro.schema.DDL.Builder newBuilder(com.linkedin.pegasus2avro.schema.DDL other) {
    return new com.linkedin.pegasus2avro.schema.DDL.Builder(other);
  }
  
  /**
   * RecordBuilder for DDL instances.
   */
  public static class Builder extends org.apache.avro.specific.SpecificRecordBuilderBase<DDL>
    implements org.apache.avro.data.RecordBuilder<DDL> {

    private java.lang.String tableDDL;

    /** Creates a new Builder */
    private Builder() {
      super(com.linkedin.pegasus2avro.schema.DDL.SCHEMA$);
    }
    
    /** Creates a Builder by copying an existing Builder */
    private Builder(com.linkedin.pegasus2avro.schema.DDL.Builder other) {
      super(other);
      if (isValidValue(fields()[0], other.tableDDL)) {
        this.tableDDL = data().deepCopy(fields()[0].schema(), other.tableDDL);
        fieldSetFlags()[0] = true;
      }
    }
    
    /** Creates a Builder by copying an existing DDL instance */
    private Builder(com.linkedin.pegasus2avro.schema.DDL other) {
            super(com.linkedin.pegasus2avro.schema.DDL.SCHEMA$);
      if (isValidValue(fields()[0], other.tableDDL)) {
        this.tableDDL = data().deepCopy(fields()[0].schema(), other.tableDDL);
        fieldSetFlags()[0] = true;
      }
    }

    /** Gets the value of the 'tableDDL' field */
    public java.lang.String getTableDDL() {
      return tableDDL;
    }
    
    /** Sets the value of the 'tableDDL' field */
    public com.linkedin.pegasus2avro.schema.DDL.Builder setTableDDL(java.lang.String value) {
      validate(fields()[0], value);
      this.tableDDL = value;
      fieldSetFlags()[0] = true;
      return this; 
    }
    
    /** Checks whether the 'tableDDL' field has been set */
    public boolean hasTableDDL() {
      return fieldSetFlags()[0];
    }
    
    /** Clears the value of the 'tableDDL' field */
    public com.linkedin.pegasus2avro.schema.DDL.Builder clearTableDDL() {
      tableDDL = null;
      fieldSetFlags()[0] = false;
      return this;
    }

    @Override
    public DDL build() {
      try {
        DDL record = new DDL();
        record.tableDDL = fieldSetFlags()[0] ? this.tableDDL : (java.lang.String) defaultValue(fields()[0]);
        return record;
      } catch (Exception e) {
        throw new org.apache.avro.AvroRuntimeException(e);
      }
    }
  }
}
