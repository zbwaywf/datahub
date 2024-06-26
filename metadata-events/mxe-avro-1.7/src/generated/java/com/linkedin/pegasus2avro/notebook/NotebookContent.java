/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */
package com.linkedin.pegasus2avro.notebook;  
@SuppressWarnings("all")
/** Content in a Notebook
Note: This is IN BETA version */
@org.apache.avro.specific.AvroGenerated
public class NotebookContent extends org.apache.avro.specific.SpecificRecordBase implements org.apache.avro.specific.SpecificRecord {
  public static final org.apache.avro.Schema SCHEMA$ = new org.apache.avro.Schema.Parser().parse("{\"type\":\"record\",\"name\":\"NotebookContent\",\"namespace\":\"com.linkedin.pegasus2avro.notebook\",\"doc\":\"Content in a Notebook\\nNote: This is IN BETA version\",\"fields\":[{\"name\":\"cells\",\"type\":{\"type\":\"array\",\"items\":{\"type\":\"record\",\"name\":\"NotebookCell\",\"doc\":\"A record of all supported cells for a Notebook. Only one type of cell will be non-null.\",\"fields\":[{\"name\":\"textCell\",\"type\":[\"null\",{\"type\":\"record\",\"name\":\"TextCell\",\"doc\":\"Text cell in a Notebook, which will present content in text format\",\"fields\":[{\"name\":\"cellTitle\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"Title of the cell\",\"default\":null},{\"name\":\"cellId\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"Unique id for the cell. This id should be globally unique for a Notebook tool even when there are multiple deployments of it. As an example, Notebook URL could be used here for QueryBook such as 'querybook.com/notebook/773/?cellId=1234'\"},{\"name\":\"changeAuditStamps\",\"type\":{\"type\":\"record\",\"name\":\"ChangeAuditStamps\",\"namespace\":\"com.linkedin.pegasus2avro.common\",\"doc\":\"Data captured on a resource/association/sub-resource level giving insight into when that resource/association/sub-resource moved into various lifecycle stages, and who acted to move it into those lifecycle stages. The recommended best practice is to include this record in your record schema, and annotate its fields as @readOnly in your resource. See https://github.com/linkedin/rest.li/wiki/Validation-in-Rest.li#restli-validation-annotations\",\"fields\":[{\"name\":\"created\",\"type\":{\"type\":\"record\",\"name\":\"AuditStamp\",\"doc\":\"Data captured on a resource/association/sub-resource level giving insight into when that resource/association/sub-resource moved into a particular lifecycle stage, and who acted to move it into that specific lifecycle stage.\",\"fields\":[{\"name\":\"time\",\"type\":\"long\",\"doc\":\"When did the resource/association/sub-resource move into the specific lifecycle stage represented by this AuditEvent.\"},{\"name\":\"actor\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"The entity (e.g. a member URN) which will be credited for moving the resource/association/sub-resource into the specific lifecycle stage. It is also the one used to authorize the change.\",\"java\":{\"class\":\"com.linkedin.pegasus2avro.common.urn.Urn\"}},{\"name\":\"impersonator\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"The entity (e.g. a service URN) which performs the change on behalf of the Actor and must be authorized to act as the Actor.\",\"default\":null,\"java\":{\"class\":\"com.linkedin.pegasus2avro.common.urn.Urn\"}},{\"name\":\"message\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"Additional context around how DataHub was informed of the particular change. For example: was the change created by an automated process, or manually.\",\"default\":null}]},\"doc\":\"An AuditStamp corresponding to the creation of this resource/association/sub-resource. A value of 0 for time indicates missing data.\",\"default\":{\"actor\":\"urn:li:corpuser:unknown\",\"impersonator\":null,\"time\":0,\"message\":null}},{\"name\":\"lastModified\",\"type\":\"AuditStamp\",\"doc\":\"An AuditStamp corresponding to the last modification of this resource/association/sub-resource. If no modification has happened since creation, lastModified should be the same as created. A value of 0 for time indicates missing data.\",\"default\":{\"actor\":\"urn:li:corpuser:unknown\",\"impersonator\":null,\"time\":0,\"message\":null}},{\"name\":\"deleted\",\"type\":[\"null\",\"AuditStamp\"],\"doc\":\"An AuditStamp corresponding to the deletion of this resource/association/sub-resource. Logically, deleted MUST have a later timestamp than creation. It may or may not have the same time as lastModified depending upon the resource/association/sub-resource semantics.\",\"default\":null}]},\"doc\":\"Captures information about who created/last modified/deleted this Notebook cell and when\"},{\"name\":\"text\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"The actual text in a TextCell in a Notebook\"}]}],\"doc\":\"The text cell content. The will be non-null only when all other cell field is null.\",\"default\":null},{\"name\":\"queryCell\",\"type\":[\"null\",{\"type\":\"record\",\"name\":\"QueryCell\",\"doc\":\"Query cell in a Notebook, which will present content in query format\",\"fields\":[{\"name\":\"cellTitle\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"Title of the cell\",\"default\":null},{\"name\":\"cellId\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"Unique id for the cell. This id should be globally unique for a Notebook tool even when there are multiple deployments of it. As an example, Notebook URL could be used here for QueryBook such as 'querybook.com/notebook/773/?cellId=1234'\"},{\"name\":\"changeAuditStamps\",\"type\":\"com.linkedin.pegasus2avro.common.ChangeAuditStamps\",\"doc\":\"Captures information about who created/last modified/deleted this Notebook cell and when\"},{\"name\":\"rawQuery\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"Raw query to explain some specific logic in a Notebook\"},{\"name\":\"lastExecuted\",\"type\":[\"null\",\"com.linkedin.pegasus2avro.common.AuditStamp\"],\"doc\":\"Captures information about who last executed this query cell and when\",\"default\":null}]}],\"doc\":\"The query cell content. The will be non-null only when all other cell field is null.\",\"default\":null},{\"name\":\"chartCell\",\"type\":[\"null\",{\"type\":\"record\",\"name\":\"ChartCell\",\"doc\":\"Chart cell in a notebook, which will present content in chart format\",\"fields\":[{\"name\":\"cellTitle\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"Title of the cell\",\"default\":null},{\"name\":\"cellId\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"Unique id for the cell. This id should be globally unique for a Notebook tool even when there are multiple deployments of it. As an example, Notebook URL could be used here for QueryBook such as 'querybook.com/notebook/773/?cellId=1234'\"},{\"name\":\"changeAuditStamps\",\"type\":\"com.linkedin.pegasus2avro.common.ChangeAuditStamps\",\"doc\":\"Captures information about who created/last modified/deleted this Notebook cell and when\"}]}],\"doc\":\"The chart cell content. The will be non-null only when all other cell field is null.\",\"default\":null},{\"name\":\"type\",\"type\":{\"type\":\"enum\",\"name\":\"NotebookCellType\",\"doc\":\"Type of Notebook Cell\",\"symbols\":[\"TEXT_CELL\",\"QUERY_CELL\",\"CHART_CELL\"],\"symbolDocs\":{\"CHART_CELL\":\"CHART Notebook cell type. The cell content is chart only.\",\"QUERY_CELL\":\"QUERY Notebook cell type. The cell context is query only.\",\"TEXT_CELL\":\"TEXT Notebook cell type. The cell context is text only.\"}},\"doc\":\"The type of this Notebook cell\"}]}},\"doc\":\"The content of a Notebook which is composed by a list of NotebookCell\",\"default\":[]}],\"Aspect\":{\"name\":\"notebookContent\"}}");
  public static org.apache.avro.Schema getClassSchema() { return SCHEMA$; }
  /** The content of a Notebook which is composed by a list of NotebookCell */
  @Deprecated public java.util.List<com.linkedin.pegasus2avro.notebook.NotebookCell> cells;

  /**
   * Default constructor.  Note that this does not initialize fields
   * to their default values from the schema.  If that is desired then
   * one should use <code>newBuilder()</code>. 
   */
  public NotebookContent() {}

  /**
   * All-args constructor.
   */
  public NotebookContent(java.util.List<com.linkedin.pegasus2avro.notebook.NotebookCell> cells) {
    this.cells = cells;
  }

  public org.apache.avro.Schema getSchema() { return SCHEMA$; }
  // Used by DatumWriter.  Applications should not call. 
  public java.lang.Object get(int field$) {
    switch (field$) {
    case 0: return cells;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }
  // Used by DatumReader.  Applications should not call. 
  @SuppressWarnings(value="unchecked")
  public void put(int field$, java.lang.Object value$) {
    switch (field$) {
    case 0: cells = (java.util.List<com.linkedin.pegasus2avro.notebook.NotebookCell>)value$; break;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }

  /**
   * Gets the value of the 'cells' field.
   * The content of a Notebook which is composed by a list of NotebookCell   */
  public java.util.List<com.linkedin.pegasus2avro.notebook.NotebookCell> getCells() {
    return cells;
  }

  /**
   * Sets the value of the 'cells' field.
   * The content of a Notebook which is composed by a list of NotebookCell   * @param value the value to set.
   */
  public void setCells(java.util.List<com.linkedin.pegasus2avro.notebook.NotebookCell> value) {
    this.cells = value;
  }

  /** Creates a new NotebookContent RecordBuilder */
  public static com.linkedin.pegasus2avro.notebook.NotebookContent.Builder newBuilder() {
    return new com.linkedin.pegasus2avro.notebook.NotebookContent.Builder();
  }
  
  /** Creates a new NotebookContent RecordBuilder by copying an existing Builder */
  public static com.linkedin.pegasus2avro.notebook.NotebookContent.Builder newBuilder(com.linkedin.pegasus2avro.notebook.NotebookContent.Builder other) {
    return new com.linkedin.pegasus2avro.notebook.NotebookContent.Builder(other);
  }
  
  /** Creates a new NotebookContent RecordBuilder by copying an existing NotebookContent instance */
  public static com.linkedin.pegasus2avro.notebook.NotebookContent.Builder newBuilder(com.linkedin.pegasus2avro.notebook.NotebookContent other) {
    return new com.linkedin.pegasus2avro.notebook.NotebookContent.Builder(other);
  }
  
  /**
   * RecordBuilder for NotebookContent instances.
   */
  public static class Builder extends org.apache.avro.specific.SpecificRecordBuilderBase<NotebookContent>
    implements org.apache.avro.data.RecordBuilder<NotebookContent> {

    private java.util.List<com.linkedin.pegasus2avro.notebook.NotebookCell> cells;

    /** Creates a new Builder */
    private Builder() {
      super(com.linkedin.pegasus2avro.notebook.NotebookContent.SCHEMA$);
    }
    
    /** Creates a Builder by copying an existing Builder */
    private Builder(com.linkedin.pegasus2avro.notebook.NotebookContent.Builder other) {
      super(other);
      if (isValidValue(fields()[0], other.cells)) {
        this.cells = data().deepCopy(fields()[0].schema(), other.cells);
        fieldSetFlags()[0] = true;
      }
    }
    
    /** Creates a Builder by copying an existing NotebookContent instance */
    private Builder(com.linkedin.pegasus2avro.notebook.NotebookContent other) {
            super(com.linkedin.pegasus2avro.notebook.NotebookContent.SCHEMA$);
      if (isValidValue(fields()[0], other.cells)) {
        this.cells = data().deepCopy(fields()[0].schema(), other.cells);
        fieldSetFlags()[0] = true;
      }
    }

    /** Gets the value of the 'cells' field */
    public java.util.List<com.linkedin.pegasus2avro.notebook.NotebookCell> getCells() {
      return cells;
    }
    
    /** Sets the value of the 'cells' field */
    public com.linkedin.pegasus2avro.notebook.NotebookContent.Builder setCells(java.util.List<com.linkedin.pegasus2avro.notebook.NotebookCell> value) {
      validate(fields()[0], value);
      this.cells = value;
      fieldSetFlags()[0] = true;
      return this; 
    }
    
    /** Checks whether the 'cells' field has been set */
    public boolean hasCells() {
      return fieldSetFlags()[0];
    }
    
    /** Clears the value of the 'cells' field */
    public com.linkedin.pegasus2avro.notebook.NotebookContent.Builder clearCells() {
      cells = null;
      fieldSetFlags()[0] = false;
      return this;
    }

    @Override
    public NotebookContent build() {
      try {
        NotebookContent record = new NotebookContent();
        record.cells = fieldSetFlags()[0] ? this.cells : (java.util.List<com.linkedin.pegasus2avro.notebook.NotebookCell>) defaultValue(fields()[0]);
        return record;
      } catch (Exception e) {
        throw new org.apache.avro.AvroRuntimeException(e);
      }
    }
  }
}
