/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */
package com.linkedin.pegasus2avro.timeseries;  
@SuppressWarnings("all")
/** Defines a generic table. */
@org.apache.avro.specific.AvroGenerated
public class GenericTable extends org.apache.avro.specific.SpecificRecordBase implements org.apache.avro.specific.SpecificRecord {
  public static final org.apache.avro.Schema SCHEMA$ = new org.apache.avro.Schema.Parser().parse("{\"type\":\"record\",\"name\":\"GenericTable\",\"namespace\":\"com.linkedin.pegasus2avro.timeseries\",\"doc\":\"Defines a generic table.\",\"fields\":[{\"name\":\"columnNames\",\"type\":{\"type\":\"array\",\"items\":{\"type\":\"string\",\"avro.java.string\":\"String\"}},\"doc\":\"The names of the columns.\"},{\"name\":\"columnTypes\",\"type\":{\"type\":\"array\",\"items\":{\"type\":\"string\",\"avro.java.string\":\"String\"}},\"doc\":\"The types of the columns.\"},{\"name\":\"rows\",\"type\":[\"null\",{\"type\":\"array\",\"items\":{\"type\":\"array\",\"items\":{\"type\":\"string\",\"avro.java.string\":\"String\"}}}],\"doc\":\"The data rows.\",\"default\":null}]}");
  public static org.apache.avro.Schema getClassSchema() { return SCHEMA$; }
  /** The names of the columns. */
  @Deprecated public java.util.List<java.lang.String> columnNames;
  /** The types of the columns. */
  @Deprecated public java.util.List<java.lang.String> columnTypes;
  /** The data rows. */
  @Deprecated public java.util.List<java.util.List<java.lang.String>> rows;

  /**
   * Default constructor.  Note that this does not initialize fields
   * to their default values from the schema.  If that is desired then
   * one should use <code>newBuilder()</code>. 
   */
  public GenericTable() {}

  /**
   * All-args constructor.
   */
  public GenericTable(java.util.List<java.lang.String> columnNames, java.util.List<java.lang.String> columnTypes, java.util.List<java.util.List<java.lang.String>> rows) {
    this.columnNames = columnNames;
    this.columnTypes = columnTypes;
    this.rows = rows;
  }

  public org.apache.avro.Schema getSchema() { return SCHEMA$; }
  // Used by DatumWriter.  Applications should not call. 
  public java.lang.Object get(int field$) {
    switch (field$) {
    case 0: return columnNames;
    case 1: return columnTypes;
    case 2: return rows;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }
  // Used by DatumReader.  Applications should not call. 
  @SuppressWarnings(value="unchecked")
  public void put(int field$, java.lang.Object value$) {
    switch (field$) {
    case 0: columnNames = (java.util.List<java.lang.String>)value$; break;
    case 1: columnTypes = (java.util.List<java.lang.String>)value$; break;
    case 2: rows = (java.util.List<java.util.List<java.lang.String>>)value$; break;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }

  /**
   * Gets the value of the 'columnNames' field.
   * The names of the columns.   */
  public java.util.List<java.lang.String> getColumnNames() {
    return columnNames;
  }

  /**
   * Sets the value of the 'columnNames' field.
   * The names of the columns.   * @param value the value to set.
   */
  public void setColumnNames(java.util.List<java.lang.String> value) {
    this.columnNames = value;
  }

  /**
   * Gets the value of the 'columnTypes' field.
   * The types of the columns.   */
  public java.util.List<java.lang.String> getColumnTypes() {
    return columnTypes;
  }

  /**
   * Sets the value of the 'columnTypes' field.
   * The types of the columns.   * @param value the value to set.
   */
  public void setColumnTypes(java.util.List<java.lang.String> value) {
    this.columnTypes = value;
  }

  /**
   * Gets the value of the 'rows' field.
   * The data rows.   */
  public java.util.List<java.util.List<java.lang.String>> getRows() {
    return rows;
  }

  /**
   * Sets the value of the 'rows' field.
   * The data rows.   * @param value the value to set.
   */
  public void setRows(java.util.List<java.util.List<java.lang.String>> value) {
    this.rows = value;
  }

  /** Creates a new GenericTable RecordBuilder */
  public static com.linkedin.pegasus2avro.timeseries.GenericTable.Builder newBuilder() {
    return new com.linkedin.pegasus2avro.timeseries.GenericTable.Builder();
  }
  
  /** Creates a new GenericTable RecordBuilder by copying an existing Builder */
  public static com.linkedin.pegasus2avro.timeseries.GenericTable.Builder newBuilder(com.linkedin.pegasus2avro.timeseries.GenericTable.Builder other) {
    return new com.linkedin.pegasus2avro.timeseries.GenericTable.Builder(other);
  }
  
  /** Creates a new GenericTable RecordBuilder by copying an existing GenericTable instance */
  public static com.linkedin.pegasus2avro.timeseries.GenericTable.Builder newBuilder(com.linkedin.pegasus2avro.timeseries.GenericTable other) {
    return new com.linkedin.pegasus2avro.timeseries.GenericTable.Builder(other);
  }
  
  /**
   * RecordBuilder for GenericTable instances.
   */
  public static class Builder extends org.apache.avro.specific.SpecificRecordBuilderBase<GenericTable>
    implements org.apache.avro.data.RecordBuilder<GenericTable> {

    private java.util.List<java.lang.String> columnNames;
    private java.util.List<java.lang.String> columnTypes;
    private java.util.List<java.util.List<java.lang.String>> rows;

    /** Creates a new Builder */
    private Builder() {
      super(com.linkedin.pegasus2avro.timeseries.GenericTable.SCHEMA$);
    }
    
    /** Creates a Builder by copying an existing Builder */
    private Builder(com.linkedin.pegasus2avro.timeseries.GenericTable.Builder other) {
      super(other);
      if (isValidValue(fields()[0], other.columnNames)) {
        this.columnNames = data().deepCopy(fields()[0].schema(), other.columnNames);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.columnTypes)) {
        this.columnTypes = data().deepCopy(fields()[1].schema(), other.columnTypes);
        fieldSetFlags()[1] = true;
      }
      if (isValidValue(fields()[2], other.rows)) {
        this.rows = data().deepCopy(fields()[2].schema(), other.rows);
        fieldSetFlags()[2] = true;
      }
    }
    
    /** Creates a Builder by copying an existing GenericTable instance */
    private Builder(com.linkedin.pegasus2avro.timeseries.GenericTable other) {
            super(com.linkedin.pegasus2avro.timeseries.GenericTable.SCHEMA$);
      if (isValidValue(fields()[0], other.columnNames)) {
        this.columnNames = data().deepCopy(fields()[0].schema(), other.columnNames);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.columnTypes)) {
        this.columnTypes = data().deepCopy(fields()[1].schema(), other.columnTypes);
        fieldSetFlags()[1] = true;
      }
      if (isValidValue(fields()[2], other.rows)) {
        this.rows = data().deepCopy(fields()[2].schema(), other.rows);
        fieldSetFlags()[2] = true;
      }
    }

    /** Gets the value of the 'columnNames' field */
    public java.util.List<java.lang.String> getColumnNames() {
      return columnNames;
    }
    
    /** Sets the value of the 'columnNames' field */
    public com.linkedin.pegasus2avro.timeseries.GenericTable.Builder setColumnNames(java.util.List<java.lang.String> value) {
      validate(fields()[0], value);
      this.columnNames = value;
      fieldSetFlags()[0] = true;
      return this; 
    }
    
    /** Checks whether the 'columnNames' field has been set */
    public boolean hasColumnNames() {
      return fieldSetFlags()[0];
    }
    
    /** Clears the value of the 'columnNames' field */
    public com.linkedin.pegasus2avro.timeseries.GenericTable.Builder clearColumnNames() {
      columnNames = null;
      fieldSetFlags()[0] = false;
      return this;
    }

    /** Gets the value of the 'columnTypes' field */
    public java.util.List<java.lang.String> getColumnTypes() {
      return columnTypes;
    }
    
    /** Sets the value of the 'columnTypes' field */
    public com.linkedin.pegasus2avro.timeseries.GenericTable.Builder setColumnTypes(java.util.List<java.lang.String> value) {
      validate(fields()[1], value);
      this.columnTypes = value;
      fieldSetFlags()[1] = true;
      return this; 
    }
    
    /** Checks whether the 'columnTypes' field has been set */
    public boolean hasColumnTypes() {
      return fieldSetFlags()[1];
    }
    
    /** Clears the value of the 'columnTypes' field */
    public com.linkedin.pegasus2avro.timeseries.GenericTable.Builder clearColumnTypes() {
      columnTypes = null;
      fieldSetFlags()[1] = false;
      return this;
    }

    /** Gets the value of the 'rows' field */
    public java.util.List<java.util.List<java.lang.String>> getRows() {
      return rows;
    }
    
    /** Sets the value of the 'rows' field */
    public com.linkedin.pegasus2avro.timeseries.GenericTable.Builder setRows(java.util.List<java.util.List<java.lang.String>> value) {
      validate(fields()[2], value);
      this.rows = value;
      fieldSetFlags()[2] = true;
      return this; 
    }
    
    /** Checks whether the 'rows' field has been set */
    public boolean hasRows() {
      return fieldSetFlags()[2];
    }
    
    /** Clears the value of the 'rows' field */
    public com.linkedin.pegasus2avro.timeseries.GenericTable.Builder clearRows() {
      rows = null;
      fieldSetFlags()[2] = false;
      return this;
    }

    @Override
    public GenericTable build() {
      try {
        GenericTable record = new GenericTable();
        record.columnNames = fieldSetFlags()[0] ? this.columnNames : (java.util.List<java.lang.String>) defaultValue(fields()[0]);
        record.columnTypes = fieldSetFlags()[1] ? this.columnTypes : (java.util.List<java.lang.String>) defaultValue(fields()[1]);
        record.rows = fieldSetFlags()[2] ? this.rows : (java.util.List<java.util.List<java.lang.String>>) defaultValue(fields()[2]);
        return record;
      } catch (Exception e) {
        throw new org.apache.avro.AvroRuntimeException(e);
      }
    }
  }
}
