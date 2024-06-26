/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */
package com.linkedin.pegasus2avro.view;  
@SuppressWarnings("all")
/** Information about a DataHub View. -- TODO: Understand whether an entity type filter is required. */
@org.apache.avro.specific.AvroGenerated
public class DataHubViewInfo extends org.apache.avro.specific.SpecificRecordBase implements org.apache.avro.specific.SpecificRecord {
  public static final org.apache.avro.Schema SCHEMA$ = new org.apache.avro.Schema.Parser().parse("{\"type\":\"record\",\"name\":\"DataHubViewInfo\",\"namespace\":\"com.linkedin.pegasus2avro.view\",\"doc\":\"Information about a DataHub View. -- TODO: Understand whether an entity type filter is required.\",\"fields\":[{\"name\":\"name\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"The name of the View\",\"Searchable\":{\"fieldType\":\"TEXT_PARTIAL\"}},{\"name\":\"description\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"Description of the view\",\"default\":null},{\"name\":\"type\",\"type\":{\"type\":\"enum\",\"name\":\"DataHubViewType\",\"symbols\":[\"PERSONAL\",\"GLOBAL\"],\"symbolDocs\":{\"GLOBAL\":\"A global view, which all users can see and use.\",\"PERSONAL\":\"A view private for a specific person.\"}},\"doc\":\"The type of View\",\"Searchable\":{}},{\"name\":\"definition\",\"type\":{\"type\":\"record\",\"name\":\"DataHubViewDefinition\",\"doc\":\"A View definition.\",\"fields\":[{\"name\":\"entityTypes\",\"type\":{\"type\":\"array\",\"items\":{\"type\":\"string\",\"avro.java.string\":\"String\"}},\"doc\":\"The Entity Types in the scope of the View.\"},{\"name\":\"filter\",\"type\":{\"type\":\"record\",\"name\":\"Filter\",\"namespace\":\"com.linkedin.pegasus2avro.metadata.query.filter\",\"doc\":\"The filter for finding a record or a collection of records\",\"fields\":[{\"name\":\"or\",\"type\":[\"null\",{\"type\":\"array\",\"items\":{\"type\":\"record\",\"name\":\"ConjunctiveCriterion\",\"doc\":\"A list of criterion and'd together.\",\"fields\":[{\"name\":\"and\",\"type\":{\"type\":\"array\",\"items\":{\"type\":\"record\",\"name\":\"Criterion\",\"doc\":\"A criterion for matching a field with given value\",\"fields\":[{\"name\":\"field\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"The name of the field that the criterion refers to\"},{\"name\":\"value\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"The value of the intended field\"},{\"name\":\"values\",\"type\":{\"type\":\"array\",\"items\":{\"type\":\"string\",\"avro.java.string\":\"String\"}},\"doc\":\"Values. one of which the intended field should match\\nNote, if values is set, the above \\\"value\\\" field will be ignored\",\"default\":[]},{\"name\":\"condition\",\"type\":{\"type\":\"enum\",\"name\":\"Condition\",\"doc\":\"The matching condition in a filter criterion\",\"symbols\":[\"CONTAIN\",\"END_WITH\",\"EQUAL\",\"IS_NULL\",\"GREATER_THAN\",\"GREATER_THAN_OR_EQUAL_TO\",\"IN\",\"LESS_THAN\",\"LESS_THAN_OR_EQUAL_TO\",\"START_WITH\"],\"symbolDocs\":{\"CONTAIN\":\"Represent the relation: String field contains value, e.g. name contains Profile\",\"END_WITH\":\"Represent the relation: String field ends with value, e.g. name ends with Event\",\"EQUAL\":\"Represent the relation: field = value, e.g. platform = hdfs\",\"GREATER_THAN\":\"Represent the relation greater than, e.g. ownerCount > 5\",\"GREATER_THAN_OR_EQUAL_TO\":\"Represent the relation greater than or equal to, e.g. ownerCount >= 5\",\"IN\":\"Represent the relation: String field is one of the array values to, e.g. name in [\\\"Profile\\\", \\\"Event\\\"]\",\"IS_NULL\":\"Represent the relation: field is null, e.g. platform is null\",\"LESS_THAN\":\"Represent the relation less than, e.g. ownerCount < 3\",\"LESS_THAN_OR_EQUAL_TO\":\"Represent the relation less than or equal to, e.g. ownerCount <= 3\",\"START_WITH\":\"Represent the relation: String field starts with value, e.g. name starts with PageView\"}},\"doc\":\"The condition for the criterion, e.g. EQUAL, START_WITH\",\"default\":\"EQUAL\"},{\"name\":\"negated\",\"type\":\"boolean\",\"doc\":\"Whether the condition should be negated\",\"default\":false}]}},\"doc\":\"A list of and criteria the filter applies to the query\"}]}}],\"doc\":\"A list of disjunctive criterion for the filter. (or operation to combine filters)\",\"default\":null},{\"name\":\"criteria\",\"type\":[\"null\",{\"type\":\"array\",\"items\":\"Criterion\"}],\"doc\":\"Deprecated! A list of conjunctive criterion for the filter. If \\\"or\\\" field is provided, then this field is ignored.\",\"default\":null}]},\"doc\":\"The filter criteria, which represents the view itself\"}]},\"doc\":\"The view itself\"},{\"name\":\"created\",\"type\":{\"type\":\"record\",\"name\":\"AuditStamp\",\"namespace\":\"com.linkedin.pegasus2avro.common\",\"doc\":\"Data captured on a resource/association/sub-resource level giving insight into when that resource/association/sub-resource moved into a particular lifecycle stage, and who acted to move it into that specific lifecycle stage.\",\"fields\":[{\"name\":\"time\",\"type\":\"long\",\"doc\":\"When did the resource/association/sub-resource move into the specific lifecycle stage represented by this AuditEvent.\"},{\"name\":\"actor\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"The entity (e.g. a member URN) which will be credited for moving the resource/association/sub-resource into the specific lifecycle stage. It is also the one used to authorize the change.\",\"java\":{\"class\":\"com.linkedin.pegasus2avro.common.urn.Urn\"}},{\"name\":\"impersonator\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"The entity (e.g. a service URN) which performs the change on behalf of the Actor and must be authorized to act as the Actor.\",\"default\":null,\"java\":{\"class\":\"com.linkedin.pegasus2avro.common.urn.Urn\"}},{\"name\":\"message\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"Additional context around how DataHub was informed of the particular change. For example: was the change created by an automated process, or manually.\",\"default\":null}]},\"doc\":\"Audit stamp capturing the time and actor who created the View.\",\"Searchable\":{\"/actor\":{\"fieldName\":\"createdBy\",\"fieldType\":\"URN\"},\"/time\":{\"fieldName\":\"createdAt\",\"fieldType\":\"DATETIME\"}}},{\"name\":\"lastModified\",\"type\":\"com.linkedin.pegasus2avro.common.AuditStamp\",\"doc\":\"Audit stamp capturing the time and actor who last modified the View.\",\"Searchable\":{\"/time\":{\"fieldName\":\"lastModifiedAt\",\"fieldType\":\"DATETIME\"}}}],\"Aspect\":{\"name\":\"dataHubViewInfo\"}}");
  public static org.apache.avro.Schema getClassSchema() { return SCHEMA$; }
  /** The name of the View */
  @Deprecated public java.lang.String name;
  /** Description of the view */
  @Deprecated public java.lang.String description;
  /** The type of View */
  @Deprecated public com.linkedin.pegasus2avro.view.DataHubViewType type;
  /** The view itself */
  @Deprecated public com.linkedin.pegasus2avro.view.DataHubViewDefinition definition;
  /** Audit stamp capturing the time and actor who created the View. */
  @Deprecated public com.linkedin.pegasus2avro.common.AuditStamp created;
  /** Audit stamp capturing the time and actor who last modified the View. */
  @Deprecated public com.linkedin.pegasus2avro.common.AuditStamp lastModified;

  /**
   * Default constructor.  Note that this does not initialize fields
   * to their default values from the schema.  If that is desired then
   * one should use <code>newBuilder()</code>. 
   */
  public DataHubViewInfo() {}

  /**
   * All-args constructor.
   */
  public DataHubViewInfo(java.lang.String name, java.lang.String description, com.linkedin.pegasus2avro.view.DataHubViewType type, com.linkedin.pegasus2avro.view.DataHubViewDefinition definition, com.linkedin.pegasus2avro.common.AuditStamp created, com.linkedin.pegasus2avro.common.AuditStamp lastModified) {
    this.name = name;
    this.description = description;
    this.type = type;
    this.definition = definition;
    this.created = created;
    this.lastModified = lastModified;
  }

  public org.apache.avro.Schema getSchema() { return SCHEMA$; }
  // Used by DatumWriter.  Applications should not call. 
  public java.lang.Object get(int field$) {
    switch (field$) {
    case 0: return name;
    case 1: return description;
    case 2: return type;
    case 3: return definition;
    case 4: return created;
    case 5: return lastModified;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }
  // Used by DatumReader.  Applications should not call. 
  @SuppressWarnings(value="unchecked")
  public void put(int field$, java.lang.Object value$) {
    switch (field$) {
    case 0: name = (java.lang.String)value$; break;
    case 1: description = (java.lang.String)value$; break;
    case 2: type = (com.linkedin.pegasus2avro.view.DataHubViewType)value$; break;
    case 3: definition = (com.linkedin.pegasus2avro.view.DataHubViewDefinition)value$; break;
    case 4: created = (com.linkedin.pegasus2avro.common.AuditStamp)value$; break;
    case 5: lastModified = (com.linkedin.pegasus2avro.common.AuditStamp)value$; break;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }

  /**
   * Gets the value of the 'name' field.
   * The name of the View   */
  public java.lang.String getName() {
    return name;
  }

  /**
   * Sets the value of the 'name' field.
   * The name of the View   * @param value the value to set.
   */
  public void setName(java.lang.String value) {
    this.name = value;
  }

  /**
   * Gets the value of the 'description' field.
   * Description of the view   */
  public java.lang.String getDescription() {
    return description;
  }

  /**
   * Sets the value of the 'description' field.
   * Description of the view   * @param value the value to set.
   */
  public void setDescription(java.lang.String value) {
    this.description = value;
  }

  /**
   * Gets the value of the 'type' field.
   * The type of View   */
  public com.linkedin.pegasus2avro.view.DataHubViewType getType() {
    return type;
  }

  /**
   * Sets the value of the 'type' field.
   * The type of View   * @param value the value to set.
   */
  public void setType(com.linkedin.pegasus2avro.view.DataHubViewType value) {
    this.type = value;
  }

  /**
   * Gets the value of the 'definition' field.
   * The view itself   */
  public com.linkedin.pegasus2avro.view.DataHubViewDefinition getDefinition() {
    return definition;
  }

  /**
   * Sets the value of the 'definition' field.
   * The view itself   * @param value the value to set.
   */
  public void setDefinition(com.linkedin.pegasus2avro.view.DataHubViewDefinition value) {
    this.definition = value;
  }

  /**
   * Gets the value of the 'created' field.
   * Audit stamp capturing the time and actor who created the View.   */
  public com.linkedin.pegasus2avro.common.AuditStamp getCreated() {
    return created;
  }

  /**
   * Sets the value of the 'created' field.
   * Audit stamp capturing the time and actor who created the View.   * @param value the value to set.
   */
  public void setCreated(com.linkedin.pegasus2avro.common.AuditStamp value) {
    this.created = value;
  }

  /**
   * Gets the value of the 'lastModified' field.
   * Audit stamp capturing the time and actor who last modified the View.   */
  public com.linkedin.pegasus2avro.common.AuditStamp getLastModified() {
    return lastModified;
  }

  /**
   * Sets the value of the 'lastModified' field.
   * Audit stamp capturing the time and actor who last modified the View.   * @param value the value to set.
   */
  public void setLastModified(com.linkedin.pegasus2avro.common.AuditStamp value) {
    this.lastModified = value;
  }

  /** Creates a new DataHubViewInfo RecordBuilder */
  public static com.linkedin.pegasus2avro.view.DataHubViewInfo.Builder newBuilder() {
    return new com.linkedin.pegasus2avro.view.DataHubViewInfo.Builder();
  }
  
  /** Creates a new DataHubViewInfo RecordBuilder by copying an existing Builder */
  public static com.linkedin.pegasus2avro.view.DataHubViewInfo.Builder newBuilder(com.linkedin.pegasus2avro.view.DataHubViewInfo.Builder other) {
    return new com.linkedin.pegasus2avro.view.DataHubViewInfo.Builder(other);
  }
  
  /** Creates a new DataHubViewInfo RecordBuilder by copying an existing DataHubViewInfo instance */
  public static com.linkedin.pegasus2avro.view.DataHubViewInfo.Builder newBuilder(com.linkedin.pegasus2avro.view.DataHubViewInfo other) {
    return new com.linkedin.pegasus2avro.view.DataHubViewInfo.Builder(other);
  }
  
  /**
   * RecordBuilder for DataHubViewInfo instances.
   */
  public static class Builder extends org.apache.avro.specific.SpecificRecordBuilderBase<DataHubViewInfo>
    implements org.apache.avro.data.RecordBuilder<DataHubViewInfo> {

    private java.lang.String name;
    private java.lang.String description;
    private com.linkedin.pegasus2avro.view.DataHubViewType type;
    private com.linkedin.pegasus2avro.view.DataHubViewDefinition definition;
    private com.linkedin.pegasus2avro.common.AuditStamp created;
    private com.linkedin.pegasus2avro.common.AuditStamp lastModified;

    /** Creates a new Builder */
    private Builder() {
      super(com.linkedin.pegasus2avro.view.DataHubViewInfo.SCHEMA$);
    }
    
    /** Creates a Builder by copying an existing Builder */
    private Builder(com.linkedin.pegasus2avro.view.DataHubViewInfo.Builder other) {
      super(other);
      if (isValidValue(fields()[0], other.name)) {
        this.name = data().deepCopy(fields()[0].schema(), other.name);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.description)) {
        this.description = data().deepCopy(fields()[1].schema(), other.description);
        fieldSetFlags()[1] = true;
      }
      if (isValidValue(fields()[2], other.type)) {
        this.type = data().deepCopy(fields()[2].schema(), other.type);
        fieldSetFlags()[2] = true;
      }
      if (isValidValue(fields()[3], other.definition)) {
        this.definition = data().deepCopy(fields()[3].schema(), other.definition);
        fieldSetFlags()[3] = true;
      }
      if (isValidValue(fields()[4], other.created)) {
        this.created = data().deepCopy(fields()[4].schema(), other.created);
        fieldSetFlags()[4] = true;
      }
      if (isValidValue(fields()[5], other.lastModified)) {
        this.lastModified = data().deepCopy(fields()[5].schema(), other.lastModified);
        fieldSetFlags()[5] = true;
      }
    }
    
    /** Creates a Builder by copying an existing DataHubViewInfo instance */
    private Builder(com.linkedin.pegasus2avro.view.DataHubViewInfo other) {
            super(com.linkedin.pegasus2avro.view.DataHubViewInfo.SCHEMA$);
      if (isValidValue(fields()[0], other.name)) {
        this.name = data().deepCopy(fields()[0].schema(), other.name);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.description)) {
        this.description = data().deepCopy(fields()[1].schema(), other.description);
        fieldSetFlags()[1] = true;
      }
      if (isValidValue(fields()[2], other.type)) {
        this.type = data().deepCopy(fields()[2].schema(), other.type);
        fieldSetFlags()[2] = true;
      }
      if (isValidValue(fields()[3], other.definition)) {
        this.definition = data().deepCopy(fields()[3].schema(), other.definition);
        fieldSetFlags()[3] = true;
      }
      if (isValidValue(fields()[4], other.created)) {
        this.created = data().deepCopy(fields()[4].schema(), other.created);
        fieldSetFlags()[4] = true;
      }
      if (isValidValue(fields()[5], other.lastModified)) {
        this.lastModified = data().deepCopy(fields()[5].schema(), other.lastModified);
        fieldSetFlags()[5] = true;
      }
    }

    /** Gets the value of the 'name' field */
    public java.lang.String getName() {
      return name;
    }
    
    /** Sets the value of the 'name' field */
    public com.linkedin.pegasus2avro.view.DataHubViewInfo.Builder setName(java.lang.String value) {
      validate(fields()[0], value);
      this.name = value;
      fieldSetFlags()[0] = true;
      return this; 
    }
    
    /** Checks whether the 'name' field has been set */
    public boolean hasName() {
      return fieldSetFlags()[0];
    }
    
    /** Clears the value of the 'name' field */
    public com.linkedin.pegasus2avro.view.DataHubViewInfo.Builder clearName() {
      name = null;
      fieldSetFlags()[0] = false;
      return this;
    }

    /** Gets the value of the 'description' field */
    public java.lang.String getDescription() {
      return description;
    }
    
    /** Sets the value of the 'description' field */
    public com.linkedin.pegasus2avro.view.DataHubViewInfo.Builder setDescription(java.lang.String value) {
      validate(fields()[1], value);
      this.description = value;
      fieldSetFlags()[1] = true;
      return this; 
    }
    
    /** Checks whether the 'description' field has been set */
    public boolean hasDescription() {
      return fieldSetFlags()[1];
    }
    
    /** Clears the value of the 'description' field */
    public com.linkedin.pegasus2avro.view.DataHubViewInfo.Builder clearDescription() {
      description = null;
      fieldSetFlags()[1] = false;
      return this;
    }

    /** Gets the value of the 'type' field */
    public com.linkedin.pegasus2avro.view.DataHubViewType getType() {
      return type;
    }
    
    /** Sets the value of the 'type' field */
    public com.linkedin.pegasus2avro.view.DataHubViewInfo.Builder setType(com.linkedin.pegasus2avro.view.DataHubViewType value) {
      validate(fields()[2], value);
      this.type = value;
      fieldSetFlags()[2] = true;
      return this; 
    }
    
    /** Checks whether the 'type' field has been set */
    public boolean hasType() {
      return fieldSetFlags()[2];
    }
    
    /** Clears the value of the 'type' field */
    public com.linkedin.pegasus2avro.view.DataHubViewInfo.Builder clearType() {
      type = null;
      fieldSetFlags()[2] = false;
      return this;
    }

    /** Gets the value of the 'definition' field */
    public com.linkedin.pegasus2avro.view.DataHubViewDefinition getDefinition() {
      return definition;
    }
    
    /** Sets the value of the 'definition' field */
    public com.linkedin.pegasus2avro.view.DataHubViewInfo.Builder setDefinition(com.linkedin.pegasus2avro.view.DataHubViewDefinition value) {
      validate(fields()[3], value);
      this.definition = value;
      fieldSetFlags()[3] = true;
      return this; 
    }
    
    /** Checks whether the 'definition' field has been set */
    public boolean hasDefinition() {
      return fieldSetFlags()[3];
    }
    
    /** Clears the value of the 'definition' field */
    public com.linkedin.pegasus2avro.view.DataHubViewInfo.Builder clearDefinition() {
      definition = null;
      fieldSetFlags()[3] = false;
      return this;
    }

    /** Gets the value of the 'created' field */
    public com.linkedin.pegasus2avro.common.AuditStamp getCreated() {
      return created;
    }
    
    /** Sets the value of the 'created' field */
    public com.linkedin.pegasus2avro.view.DataHubViewInfo.Builder setCreated(com.linkedin.pegasus2avro.common.AuditStamp value) {
      validate(fields()[4], value);
      this.created = value;
      fieldSetFlags()[4] = true;
      return this; 
    }
    
    /** Checks whether the 'created' field has been set */
    public boolean hasCreated() {
      return fieldSetFlags()[4];
    }
    
    /** Clears the value of the 'created' field */
    public com.linkedin.pegasus2avro.view.DataHubViewInfo.Builder clearCreated() {
      created = null;
      fieldSetFlags()[4] = false;
      return this;
    }

    /** Gets the value of the 'lastModified' field */
    public com.linkedin.pegasus2avro.common.AuditStamp getLastModified() {
      return lastModified;
    }
    
    /** Sets the value of the 'lastModified' field */
    public com.linkedin.pegasus2avro.view.DataHubViewInfo.Builder setLastModified(com.linkedin.pegasus2avro.common.AuditStamp value) {
      validate(fields()[5], value);
      this.lastModified = value;
      fieldSetFlags()[5] = true;
      return this; 
    }
    
    /** Checks whether the 'lastModified' field has been set */
    public boolean hasLastModified() {
      return fieldSetFlags()[5];
    }
    
    /** Clears the value of the 'lastModified' field */
    public com.linkedin.pegasus2avro.view.DataHubViewInfo.Builder clearLastModified() {
      lastModified = null;
      fieldSetFlags()[5] = false;
      return this;
    }

    @Override
    public DataHubViewInfo build() {
      try {
        DataHubViewInfo record = new DataHubViewInfo();
        record.name = fieldSetFlags()[0] ? this.name : (java.lang.String) defaultValue(fields()[0]);
        record.description = fieldSetFlags()[1] ? this.description : (java.lang.String) defaultValue(fields()[1]);
        record.type = fieldSetFlags()[2] ? this.type : (com.linkedin.pegasus2avro.view.DataHubViewType) defaultValue(fields()[2]);
        record.definition = fieldSetFlags()[3] ? this.definition : (com.linkedin.pegasus2avro.view.DataHubViewDefinition) defaultValue(fields()[3]);
        record.created = fieldSetFlags()[4] ? this.created : (com.linkedin.pegasus2avro.common.AuditStamp) defaultValue(fields()[4]);
        record.lastModified = fieldSetFlags()[5] ? this.lastModified : (com.linkedin.pegasus2avro.common.AuditStamp) defaultValue(fields()[5]);
        return record;
      } catch (Exception e) {
        throw new org.apache.avro.AvroRuntimeException(e);
      }
    }
  }
}
