/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */
package com.linkedin.pegasus2avro.notebook;  
@SuppressWarnings("all")
/** Query cell in a Notebook, which will present content in query format */
@org.apache.avro.specific.AvroGenerated
public class QueryCell extends org.apache.avro.specific.SpecificRecordBase implements org.apache.avro.specific.SpecificRecord {
  public static final org.apache.avro.Schema SCHEMA$ = new org.apache.avro.Schema.Parser().parse("{\"type\":\"record\",\"name\":\"QueryCell\",\"namespace\":\"com.linkedin.pegasus2avro.notebook\",\"doc\":\"Query cell in a Notebook, which will present content in query format\",\"fields\":[{\"name\":\"cellTitle\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"Title of the cell\",\"default\":null},{\"name\":\"cellId\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"Unique id for the cell. This id should be globally unique for a Notebook tool even when there are multiple deployments of it. As an example, Notebook URL could be used here for QueryBook such as 'querybook.com/notebook/773/?cellId=1234'\"},{\"name\":\"changeAuditStamps\",\"type\":{\"type\":\"record\",\"name\":\"ChangeAuditStamps\",\"namespace\":\"com.linkedin.pegasus2avro.common\",\"doc\":\"Data captured on a resource/association/sub-resource level giving insight into when that resource/association/sub-resource moved into various lifecycle stages, and who acted to move it into those lifecycle stages. The recommended best practice is to include this record in your record schema, and annotate its fields as @readOnly in your resource. See https://github.com/linkedin/rest.li/wiki/Validation-in-Rest.li#restli-validation-annotations\",\"fields\":[{\"name\":\"created\",\"type\":{\"type\":\"record\",\"name\":\"AuditStamp\",\"doc\":\"Data captured on a resource/association/sub-resource level giving insight into when that resource/association/sub-resource moved into a particular lifecycle stage, and who acted to move it into that specific lifecycle stage.\",\"fields\":[{\"name\":\"time\",\"type\":\"long\",\"doc\":\"When did the resource/association/sub-resource move into the specific lifecycle stage represented by this AuditEvent.\"},{\"name\":\"actor\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"The entity (e.g. a member URN) which will be credited for moving the resource/association/sub-resource into the specific lifecycle stage. It is also the one used to authorize the change.\",\"java\":{\"class\":\"com.linkedin.pegasus2avro.common.urn.Urn\"}},{\"name\":\"impersonator\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"The entity (e.g. a service URN) which performs the change on behalf of the Actor and must be authorized to act as the Actor.\",\"default\":null,\"java\":{\"class\":\"com.linkedin.pegasus2avro.common.urn.Urn\"}},{\"name\":\"message\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"Additional context around how DataHub was informed of the particular change. For example: was the change created by an automated process, or manually.\",\"default\":null}]},\"doc\":\"An AuditStamp corresponding to the creation of this resource/association/sub-resource. A value of 0 for time indicates missing data.\",\"default\":{\"actor\":\"urn:li:corpuser:unknown\",\"impersonator\":null,\"time\":0,\"message\":null}},{\"name\":\"lastModified\",\"type\":\"AuditStamp\",\"doc\":\"An AuditStamp corresponding to the last modification of this resource/association/sub-resource. If no modification has happened since creation, lastModified should be the same as created. A value of 0 for time indicates missing data.\",\"default\":{\"actor\":\"urn:li:corpuser:unknown\",\"impersonator\":null,\"time\":0,\"message\":null}},{\"name\":\"deleted\",\"type\":[\"null\",\"AuditStamp\"],\"doc\":\"An AuditStamp corresponding to the deletion of this resource/association/sub-resource. Logically, deleted MUST have a later timestamp than creation. It may or may not have the same time as lastModified depending upon the resource/association/sub-resource semantics.\",\"default\":null}]},\"doc\":\"Captures information about who created/last modified/deleted this Notebook cell and when\"},{\"name\":\"rawQuery\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"Raw query to explain some specific logic in a Notebook\"},{\"name\":\"lastExecuted\",\"type\":[\"null\",\"com.linkedin.pegasus2avro.common.AuditStamp\"],\"doc\":\"Captures information about who last executed this query cell and when\",\"default\":null}]}");
  public static org.apache.avro.Schema getClassSchema() { return SCHEMA$; }
  /** Title of the cell */
  @Deprecated public java.lang.String cellTitle;
  /** Unique id for the cell. This id should be globally unique for a Notebook tool even when there are multiple deployments of it. As an example, Notebook URL could be used here for QueryBook such as 'querybook.com/notebook/773/?cellId=1234' */
  @Deprecated public java.lang.String cellId;
  /** Captures information about who created/last modified/deleted this Notebook cell and when */
  @Deprecated public com.linkedin.pegasus2avro.common.ChangeAuditStamps changeAuditStamps;
  /** Raw query to explain some specific logic in a Notebook */
  @Deprecated public java.lang.String rawQuery;
  /** Captures information about who last executed this query cell and when */
  @Deprecated public com.linkedin.pegasus2avro.common.AuditStamp lastExecuted;

  /**
   * Default constructor.  Note that this does not initialize fields
   * to their default values from the schema.  If that is desired then
   * one should use <code>newBuilder()</code>. 
   */
  public QueryCell() {}

  /**
   * All-args constructor.
   */
  public QueryCell(java.lang.String cellTitle, java.lang.String cellId, com.linkedin.pegasus2avro.common.ChangeAuditStamps changeAuditStamps, java.lang.String rawQuery, com.linkedin.pegasus2avro.common.AuditStamp lastExecuted) {
    this.cellTitle = cellTitle;
    this.cellId = cellId;
    this.changeAuditStamps = changeAuditStamps;
    this.rawQuery = rawQuery;
    this.lastExecuted = lastExecuted;
  }

  public org.apache.avro.Schema getSchema() { return SCHEMA$; }
  // Used by DatumWriter.  Applications should not call. 
  public java.lang.Object get(int field$) {
    switch (field$) {
    case 0: return cellTitle;
    case 1: return cellId;
    case 2: return changeAuditStamps;
    case 3: return rawQuery;
    case 4: return lastExecuted;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }
  // Used by DatumReader.  Applications should not call. 
  @SuppressWarnings(value="unchecked")
  public void put(int field$, java.lang.Object value$) {
    switch (field$) {
    case 0: cellTitle = (java.lang.String)value$; break;
    case 1: cellId = (java.lang.String)value$; break;
    case 2: changeAuditStamps = (com.linkedin.pegasus2avro.common.ChangeAuditStamps)value$; break;
    case 3: rawQuery = (java.lang.String)value$; break;
    case 4: lastExecuted = (com.linkedin.pegasus2avro.common.AuditStamp)value$; break;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }

  /**
   * Gets the value of the 'cellTitle' field.
   * Title of the cell   */
  public java.lang.String getCellTitle() {
    return cellTitle;
  }

  /**
   * Sets the value of the 'cellTitle' field.
   * Title of the cell   * @param value the value to set.
   */
  public void setCellTitle(java.lang.String value) {
    this.cellTitle = value;
  }

  /**
   * Gets the value of the 'cellId' field.
   * Unique id for the cell. This id should be globally unique for a Notebook tool even when there are multiple deployments of it. As an example, Notebook URL could be used here for QueryBook such as 'querybook.com/notebook/773/?cellId=1234'   */
  public java.lang.String getCellId() {
    return cellId;
  }

  /**
   * Sets the value of the 'cellId' field.
   * Unique id for the cell. This id should be globally unique for a Notebook tool even when there are multiple deployments of it. As an example, Notebook URL could be used here for QueryBook such as 'querybook.com/notebook/773/?cellId=1234'   * @param value the value to set.
   */
  public void setCellId(java.lang.String value) {
    this.cellId = value;
  }

  /**
   * Gets the value of the 'changeAuditStamps' field.
   * Captures information about who created/last modified/deleted this Notebook cell and when   */
  public com.linkedin.pegasus2avro.common.ChangeAuditStamps getChangeAuditStamps() {
    return changeAuditStamps;
  }

  /**
   * Sets the value of the 'changeAuditStamps' field.
   * Captures information about who created/last modified/deleted this Notebook cell and when   * @param value the value to set.
   */
  public void setChangeAuditStamps(com.linkedin.pegasus2avro.common.ChangeAuditStamps value) {
    this.changeAuditStamps = value;
  }

  /**
   * Gets the value of the 'rawQuery' field.
   * Raw query to explain some specific logic in a Notebook   */
  public java.lang.String getRawQuery() {
    return rawQuery;
  }

  /**
   * Sets the value of the 'rawQuery' field.
   * Raw query to explain some specific logic in a Notebook   * @param value the value to set.
   */
  public void setRawQuery(java.lang.String value) {
    this.rawQuery = value;
  }

  /**
   * Gets the value of the 'lastExecuted' field.
   * Captures information about who last executed this query cell and when   */
  public com.linkedin.pegasus2avro.common.AuditStamp getLastExecuted() {
    return lastExecuted;
  }

  /**
   * Sets the value of the 'lastExecuted' field.
   * Captures information about who last executed this query cell and when   * @param value the value to set.
   */
  public void setLastExecuted(com.linkedin.pegasus2avro.common.AuditStamp value) {
    this.lastExecuted = value;
  }

  /** Creates a new QueryCell RecordBuilder */
  public static com.linkedin.pegasus2avro.notebook.QueryCell.Builder newBuilder() {
    return new com.linkedin.pegasus2avro.notebook.QueryCell.Builder();
  }
  
  /** Creates a new QueryCell RecordBuilder by copying an existing Builder */
  public static com.linkedin.pegasus2avro.notebook.QueryCell.Builder newBuilder(com.linkedin.pegasus2avro.notebook.QueryCell.Builder other) {
    return new com.linkedin.pegasus2avro.notebook.QueryCell.Builder(other);
  }
  
  /** Creates a new QueryCell RecordBuilder by copying an existing QueryCell instance */
  public static com.linkedin.pegasus2avro.notebook.QueryCell.Builder newBuilder(com.linkedin.pegasus2avro.notebook.QueryCell other) {
    return new com.linkedin.pegasus2avro.notebook.QueryCell.Builder(other);
  }
  
  /**
   * RecordBuilder for QueryCell instances.
   */
  public static class Builder extends org.apache.avro.specific.SpecificRecordBuilderBase<QueryCell>
    implements org.apache.avro.data.RecordBuilder<QueryCell> {

    private java.lang.String cellTitle;
    private java.lang.String cellId;
    private com.linkedin.pegasus2avro.common.ChangeAuditStamps changeAuditStamps;
    private java.lang.String rawQuery;
    private com.linkedin.pegasus2avro.common.AuditStamp lastExecuted;

    /** Creates a new Builder */
    private Builder() {
      super(com.linkedin.pegasus2avro.notebook.QueryCell.SCHEMA$);
    }
    
    /** Creates a Builder by copying an existing Builder */
    private Builder(com.linkedin.pegasus2avro.notebook.QueryCell.Builder other) {
      super(other);
      if (isValidValue(fields()[0], other.cellTitle)) {
        this.cellTitle = data().deepCopy(fields()[0].schema(), other.cellTitle);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.cellId)) {
        this.cellId = data().deepCopy(fields()[1].schema(), other.cellId);
        fieldSetFlags()[1] = true;
      }
      if (isValidValue(fields()[2], other.changeAuditStamps)) {
        this.changeAuditStamps = data().deepCopy(fields()[2].schema(), other.changeAuditStamps);
        fieldSetFlags()[2] = true;
      }
      if (isValidValue(fields()[3], other.rawQuery)) {
        this.rawQuery = data().deepCopy(fields()[3].schema(), other.rawQuery);
        fieldSetFlags()[3] = true;
      }
      if (isValidValue(fields()[4], other.lastExecuted)) {
        this.lastExecuted = data().deepCopy(fields()[4].schema(), other.lastExecuted);
        fieldSetFlags()[4] = true;
      }
    }
    
    /** Creates a Builder by copying an existing QueryCell instance */
    private Builder(com.linkedin.pegasus2avro.notebook.QueryCell other) {
            super(com.linkedin.pegasus2avro.notebook.QueryCell.SCHEMA$);
      if (isValidValue(fields()[0], other.cellTitle)) {
        this.cellTitle = data().deepCopy(fields()[0].schema(), other.cellTitle);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.cellId)) {
        this.cellId = data().deepCopy(fields()[1].schema(), other.cellId);
        fieldSetFlags()[1] = true;
      }
      if (isValidValue(fields()[2], other.changeAuditStamps)) {
        this.changeAuditStamps = data().deepCopy(fields()[2].schema(), other.changeAuditStamps);
        fieldSetFlags()[2] = true;
      }
      if (isValidValue(fields()[3], other.rawQuery)) {
        this.rawQuery = data().deepCopy(fields()[3].schema(), other.rawQuery);
        fieldSetFlags()[3] = true;
      }
      if (isValidValue(fields()[4], other.lastExecuted)) {
        this.lastExecuted = data().deepCopy(fields()[4].schema(), other.lastExecuted);
        fieldSetFlags()[4] = true;
      }
    }

    /** Gets the value of the 'cellTitle' field */
    public java.lang.String getCellTitle() {
      return cellTitle;
    }
    
    /** Sets the value of the 'cellTitle' field */
    public com.linkedin.pegasus2avro.notebook.QueryCell.Builder setCellTitle(java.lang.String value) {
      validate(fields()[0], value);
      this.cellTitle = value;
      fieldSetFlags()[0] = true;
      return this; 
    }
    
    /** Checks whether the 'cellTitle' field has been set */
    public boolean hasCellTitle() {
      return fieldSetFlags()[0];
    }
    
    /** Clears the value of the 'cellTitle' field */
    public com.linkedin.pegasus2avro.notebook.QueryCell.Builder clearCellTitle() {
      cellTitle = null;
      fieldSetFlags()[0] = false;
      return this;
    }

    /** Gets the value of the 'cellId' field */
    public java.lang.String getCellId() {
      return cellId;
    }
    
    /** Sets the value of the 'cellId' field */
    public com.linkedin.pegasus2avro.notebook.QueryCell.Builder setCellId(java.lang.String value) {
      validate(fields()[1], value);
      this.cellId = value;
      fieldSetFlags()[1] = true;
      return this; 
    }
    
    /** Checks whether the 'cellId' field has been set */
    public boolean hasCellId() {
      return fieldSetFlags()[1];
    }
    
    /** Clears the value of the 'cellId' field */
    public com.linkedin.pegasus2avro.notebook.QueryCell.Builder clearCellId() {
      cellId = null;
      fieldSetFlags()[1] = false;
      return this;
    }

    /** Gets the value of the 'changeAuditStamps' field */
    public com.linkedin.pegasus2avro.common.ChangeAuditStamps getChangeAuditStamps() {
      return changeAuditStamps;
    }
    
    /** Sets the value of the 'changeAuditStamps' field */
    public com.linkedin.pegasus2avro.notebook.QueryCell.Builder setChangeAuditStamps(com.linkedin.pegasus2avro.common.ChangeAuditStamps value) {
      validate(fields()[2], value);
      this.changeAuditStamps = value;
      fieldSetFlags()[2] = true;
      return this; 
    }
    
    /** Checks whether the 'changeAuditStamps' field has been set */
    public boolean hasChangeAuditStamps() {
      return fieldSetFlags()[2];
    }
    
    /** Clears the value of the 'changeAuditStamps' field */
    public com.linkedin.pegasus2avro.notebook.QueryCell.Builder clearChangeAuditStamps() {
      changeAuditStamps = null;
      fieldSetFlags()[2] = false;
      return this;
    }

    /** Gets the value of the 'rawQuery' field */
    public java.lang.String getRawQuery() {
      return rawQuery;
    }
    
    /** Sets the value of the 'rawQuery' field */
    public com.linkedin.pegasus2avro.notebook.QueryCell.Builder setRawQuery(java.lang.String value) {
      validate(fields()[3], value);
      this.rawQuery = value;
      fieldSetFlags()[3] = true;
      return this; 
    }
    
    /** Checks whether the 'rawQuery' field has been set */
    public boolean hasRawQuery() {
      return fieldSetFlags()[3];
    }
    
    /** Clears the value of the 'rawQuery' field */
    public com.linkedin.pegasus2avro.notebook.QueryCell.Builder clearRawQuery() {
      rawQuery = null;
      fieldSetFlags()[3] = false;
      return this;
    }

    /** Gets the value of the 'lastExecuted' field */
    public com.linkedin.pegasus2avro.common.AuditStamp getLastExecuted() {
      return lastExecuted;
    }
    
    /** Sets the value of the 'lastExecuted' field */
    public com.linkedin.pegasus2avro.notebook.QueryCell.Builder setLastExecuted(com.linkedin.pegasus2avro.common.AuditStamp value) {
      validate(fields()[4], value);
      this.lastExecuted = value;
      fieldSetFlags()[4] = true;
      return this; 
    }
    
    /** Checks whether the 'lastExecuted' field has been set */
    public boolean hasLastExecuted() {
      return fieldSetFlags()[4];
    }
    
    /** Clears the value of the 'lastExecuted' field */
    public com.linkedin.pegasus2avro.notebook.QueryCell.Builder clearLastExecuted() {
      lastExecuted = null;
      fieldSetFlags()[4] = false;
      return this;
    }

    @Override
    public QueryCell build() {
      try {
        QueryCell record = new QueryCell();
        record.cellTitle = fieldSetFlags()[0] ? this.cellTitle : (java.lang.String) defaultValue(fields()[0]);
        record.cellId = fieldSetFlags()[1] ? this.cellId : (java.lang.String) defaultValue(fields()[1]);
        record.changeAuditStamps = fieldSetFlags()[2] ? this.changeAuditStamps : (com.linkedin.pegasus2avro.common.ChangeAuditStamps) defaultValue(fields()[2]);
        record.rawQuery = fieldSetFlags()[3] ? this.rawQuery : (java.lang.String) defaultValue(fields()[3]);
        record.lastExecuted = fieldSetFlags()[4] ? this.lastExecuted : (com.linkedin.pegasus2avro.common.AuditStamp) defaultValue(fields()[4]);
        return record;
      } catch (Exception e) {
        throw new org.apache.avro.AvroRuntimeException(e);
      }
    }
  }
}
