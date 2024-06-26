/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */
package com.linkedin.pegasus2avro.chart;  
@SuppressWarnings("all")
/** Information about a chart */
@org.apache.avro.specific.AvroGenerated
public class ChartInfo extends org.apache.avro.specific.SpecificRecordBase implements org.apache.avro.specific.SpecificRecord {
  public static final org.apache.avro.Schema SCHEMA$ = new org.apache.avro.Schema.Parser().parse("{\"type\":\"record\",\"name\":\"ChartInfo\",\"namespace\":\"com.linkedin.pegasus2avro.chart\",\"doc\":\"Information about a chart\",\"fields\":[{\"name\":\"customProperties\",\"type\":{\"type\":\"map\",\"values\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"avro.java.string\":\"String\"},\"doc\":\"Custom property bag.\",\"default\":{},\"Searchable\":{\"/*\":{\"queryByDefault\":true}}},{\"name\":\"externalUrl\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"URL where the reference exist\",\"default\":null,\"java\":{\"class\":\"com.linkedin.pegasus2avro.common.url.Url\",\"coercerClass\":\"com.linkedin.pegasus2avro.common.url.UrlCoercer\"}},{\"name\":\"title\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"Title of the chart\",\"Searchable\":{\"enableAutocomplete\":true,\"fieldType\":\"TEXT_PARTIAL\"}},{\"name\":\"description\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"Detailed description about the chart\",\"Searchable\":{}},{\"name\":\"lastModified\",\"type\":{\"type\":\"record\",\"name\":\"ChangeAuditStamps\",\"namespace\":\"com.linkedin.pegasus2avro.common\",\"doc\":\"Data captured on a resource/association/sub-resource level giving insight into when that resource/association/sub-resource moved into various lifecycle stages, and who acted to move it into those lifecycle stages. The recommended best practice is to include this record in your record schema, and annotate its fields as @readOnly in your resource. See https://github.com/linkedin/rest.li/wiki/Validation-in-Rest.li#restli-validation-annotations\",\"fields\":[{\"name\":\"created\",\"type\":{\"type\":\"record\",\"name\":\"AuditStamp\",\"doc\":\"Data captured on a resource/association/sub-resource level giving insight into when that resource/association/sub-resource moved into a particular lifecycle stage, and who acted to move it into that specific lifecycle stage.\",\"fields\":[{\"name\":\"time\",\"type\":\"long\",\"doc\":\"When did the resource/association/sub-resource move into the specific lifecycle stage represented by this AuditEvent.\"},{\"name\":\"actor\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"The entity (e.g. a member URN) which will be credited for moving the resource/association/sub-resource into the specific lifecycle stage. It is also the one used to authorize the change.\",\"java\":{\"class\":\"com.linkedin.pegasus2avro.common.urn.Urn\"}},{\"name\":\"impersonator\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"The entity (e.g. a service URN) which performs the change on behalf of the Actor and must be authorized to act as the Actor.\",\"default\":null,\"java\":{\"class\":\"com.linkedin.pegasus2avro.common.urn.Urn\"}},{\"name\":\"message\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"Additional context around how DataHub was informed of the particular change. For example: was the change created by an automated process, or manually.\",\"default\":null}]},\"doc\":\"An AuditStamp corresponding to the creation of this resource/association/sub-resource. A value of 0 for time indicates missing data.\",\"default\":{\"actor\":\"urn:li:corpuser:unknown\",\"impersonator\":null,\"time\":0,\"message\":null}},{\"name\":\"lastModified\",\"type\":\"AuditStamp\",\"doc\":\"An AuditStamp corresponding to the last modification of this resource/association/sub-resource. If no modification has happened since creation, lastModified should be the same as created. A value of 0 for time indicates missing data.\",\"default\":{\"actor\":\"urn:li:corpuser:unknown\",\"impersonator\":null,\"time\":0,\"message\":null}},{\"name\":\"deleted\",\"type\":[\"null\",\"AuditStamp\"],\"doc\":\"An AuditStamp corresponding to the deletion of this resource/association/sub-resource. Logically, deleted MUST have a later timestamp than creation. It may or may not have the same time as lastModified depending upon the resource/association/sub-resource semantics.\",\"default\":null}]},\"doc\":\"Captures information about who created/last modified/deleted this chart and when\"},{\"name\":\"chartUrl\",\"type\":[\"null\",{\"type\":\"string\",\"avro.java.string\":\"String\"}],\"doc\":\"URL for the chart. This could be used as an external link on DataHub to allow users access/view the chart\",\"default\":null,\"java\":{\"class\":\"com.linkedin.pegasus2avro.common.url.Url\",\"coercerClass\":\"com.linkedin.pegasus2avro.common.url.UrlCoercer\"}},{\"name\":\"inputs\",\"type\":[\"null\",{\"type\":\"array\",\"items\":[{\"type\":\"string\",\"avro.java.string\":\"String\"}]}],\"doc\":\"Data sources for the chart\\nDeprecated! Use inputEdges instead.\",\"default\":null,\"Relationship\":{\"/*/string\":{\"entityTypes\":[\"dataset\"],\"isLineage\":true,\"name\":\"Consumes\"}},\"deprecated\":true},{\"name\":\"inputEdges\",\"type\":[\"null\",{\"type\":\"array\",\"items\":{\"type\":\"record\",\"name\":\"Edge\",\"namespace\":\"com.linkedin.pegasus2avro.common\",\"doc\":\"Information about a relatonship edge.\",\"fields\":[{\"name\":\"sourceUrn\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"Urn of the source of this relationship edge.\",\"java\":{\"class\":\"com.linkedin.pegasus2avro.common.urn.Urn\"}},{\"name\":\"destinationUrn\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"Urn of the destination of this relationship edge.\",\"java\":{\"class\":\"com.linkedin.pegasus2avro.common.urn.Urn\"}},{\"name\":\"created\",\"type\":\"AuditStamp\",\"doc\":\"Audit stamp containing who created this relationship edge and when\"},{\"name\":\"lastModified\",\"type\":\"AuditStamp\",\"doc\":\"Audit stamp containing who last modified this relationship edge and when\"},{\"name\":\"properties\",\"type\":[\"null\",{\"type\":\"map\",\"values\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"avro.java.string\":\"String\"}],\"doc\":\"A generic properties bag that allows us to store specific information on this graph edge.\",\"default\":null}]}}],\"doc\":\"Data sources for the chart\",\"default\":null,\"Relationship\":{\"/*/destinationUrn\":{\"createdActor\":\"inputEdges/*/created/actor\",\"createdOn\":\"inputEdges/*/created/time\",\"entityTypes\":[\"dataset\"],\"isLineage\":true,\"name\":\"Consumes\",\"properties\":\"inputEdges/*/properties\",\"updatedActor\":\"inputEdges/*/lastModified/actor\",\"updatedOn\":\"inputEdges/*/lastModified/time\"}}},{\"name\":\"type\",\"type\":[\"null\",{\"type\":\"enum\",\"name\":\"ChartType\",\"doc\":\"The various types of charts\",\"symbols\":[\"BAR\",\"PIE\",\"SCATTER\",\"TABLE\",\"TEXT\",\"LINE\",\"AREA\",\"HISTOGRAM\",\"BOX_PLOT\",\"WORD_CLOUD\",\"COHORT\"],\"symbolDocs\":{\"BAR\":\"Chart showing a Bar chart\",\"PIE\":\"Chart showing a Pie chart\",\"SCATTER\":\"Chart showing a Scatter plot\",\"TABLE\":\"Chart showing a table\",\"TEXT\":\"Chart showing Markdown formatted text\"}}],\"doc\":\"Type of the chart\",\"default\":null,\"Searchable\":{\"addToFilters\":true,\"fieldType\":\"KEYWORD\",\"filterNameOverride\":\"Chart Type\"}},{\"name\":\"access\",\"type\":[\"null\",{\"type\":\"enum\",\"name\":\"AccessLevel\",\"namespace\":\"com.linkedin.pegasus2avro.common\",\"doc\":\"The various access levels\",\"symbols\":[\"PUBLIC\",\"PRIVATE\"],\"symbolDocs\":{\"PRIVATE\":\"Private availability to certain set of users\",\"PUBLIC\":\"Publicly available access level\"}}],\"doc\":\"Access level for the chart\",\"default\":null,\"Searchable\":{\"addToFilters\":true,\"fieldType\":\"KEYWORD\",\"filterNameOverride\":\"Access Level\"}},{\"name\":\"lastRefreshed\",\"type\":[\"null\",\"long\"],\"doc\":\"The time when this chart last refreshed\",\"default\":null}],\"Aspect\":{\"name\":\"chartInfo\"}}");
  public static org.apache.avro.Schema getClassSchema() { return SCHEMA$; }
  /** Custom property bag. */
  @Deprecated public java.util.Map<java.lang.String,java.lang.String> customProperties;
  /** URL where the reference exist */
  @Deprecated public java.lang.String externalUrl;
  /** Title of the chart */
  @Deprecated public java.lang.String title;
  /** Detailed description about the chart */
  @Deprecated public java.lang.String description;
  /** Captures information about who created/last modified/deleted this chart and when */
  @Deprecated public com.linkedin.pegasus2avro.common.ChangeAuditStamps lastModified;
  /** URL for the chart. This could be used as an external link on DataHub to allow users access/view the chart */
  @Deprecated public java.lang.String chartUrl;
  /** Data sources for the chart
Deprecated! Use inputEdges instead. */
  @Deprecated public java.util.List<java.lang.Object> inputs;
  /** Data sources for the chart */
  @Deprecated public java.util.List<com.linkedin.pegasus2avro.common.Edge> inputEdges;
  /** Type of the chart */
  @Deprecated public com.linkedin.pegasus2avro.chart.ChartType type;
  /** Access level for the chart */
  @Deprecated public com.linkedin.pegasus2avro.common.AccessLevel access;
  /** The time when this chart last refreshed */
  @Deprecated public java.lang.Long lastRefreshed;

  /**
   * Default constructor.  Note that this does not initialize fields
   * to their default values from the schema.  If that is desired then
   * one should use <code>newBuilder()</code>. 
   */
  public ChartInfo() {}

  /**
   * All-args constructor.
   */
  public ChartInfo(java.util.Map<java.lang.String,java.lang.String> customProperties, java.lang.String externalUrl, java.lang.String title, java.lang.String description, com.linkedin.pegasus2avro.common.ChangeAuditStamps lastModified, java.lang.String chartUrl, java.util.List<java.lang.Object> inputs, java.util.List<com.linkedin.pegasus2avro.common.Edge> inputEdges, com.linkedin.pegasus2avro.chart.ChartType type, com.linkedin.pegasus2avro.common.AccessLevel access, java.lang.Long lastRefreshed) {
    this.customProperties = customProperties;
    this.externalUrl = externalUrl;
    this.title = title;
    this.description = description;
    this.lastModified = lastModified;
    this.chartUrl = chartUrl;
    this.inputs = inputs;
    this.inputEdges = inputEdges;
    this.type = type;
    this.access = access;
    this.lastRefreshed = lastRefreshed;
  }

  public org.apache.avro.Schema getSchema() { return SCHEMA$; }
  // Used by DatumWriter.  Applications should not call. 
  public java.lang.Object get(int field$) {
    switch (field$) {
    case 0: return customProperties;
    case 1: return externalUrl;
    case 2: return title;
    case 3: return description;
    case 4: return lastModified;
    case 5: return chartUrl;
    case 6: return inputs;
    case 7: return inputEdges;
    case 8: return type;
    case 9: return access;
    case 10: return lastRefreshed;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }
  // Used by DatumReader.  Applications should not call. 
  @SuppressWarnings(value="unchecked")
  public void put(int field$, java.lang.Object value$) {
    switch (field$) {
    case 0: customProperties = (java.util.Map<java.lang.String,java.lang.String>)value$; break;
    case 1: externalUrl = (java.lang.String)value$; break;
    case 2: title = (java.lang.String)value$; break;
    case 3: description = (java.lang.String)value$; break;
    case 4: lastModified = (com.linkedin.pegasus2avro.common.ChangeAuditStamps)value$; break;
    case 5: chartUrl = (java.lang.String)value$; break;
    case 6: inputs = (java.util.List<java.lang.Object>)value$; break;
    case 7: inputEdges = (java.util.List<com.linkedin.pegasus2avro.common.Edge>)value$; break;
    case 8: type = (com.linkedin.pegasus2avro.chart.ChartType)value$; break;
    case 9: access = (com.linkedin.pegasus2avro.common.AccessLevel)value$; break;
    case 10: lastRefreshed = (java.lang.Long)value$; break;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }

  /**
   * Gets the value of the 'customProperties' field.
   * Custom property bag.   */
  public java.util.Map<java.lang.String,java.lang.String> getCustomProperties() {
    return customProperties;
  }

  /**
   * Sets the value of the 'customProperties' field.
   * Custom property bag.   * @param value the value to set.
   */
  public void setCustomProperties(java.util.Map<java.lang.String,java.lang.String> value) {
    this.customProperties = value;
  }

  /**
   * Gets the value of the 'externalUrl' field.
   * URL where the reference exist   */
  public java.lang.String getExternalUrl() {
    return externalUrl;
  }

  /**
   * Sets the value of the 'externalUrl' field.
   * URL where the reference exist   * @param value the value to set.
   */
  public void setExternalUrl(java.lang.String value) {
    this.externalUrl = value;
  }

  /**
   * Gets the value of the 'title' field.
   * Title of the chart   */
  public java.lang.String getTitle() {
    return title;
  }

  /**
   * Sets the value of the 'title' field.
   * Title of the chart   * @param value the value to set.
   */
  public void setTitle(java.lang.String value) {
    this.title = value;
  }

  /**
   * Gets the value of the 'description' field.
   * Detailed description about the chart   */
  public java.lang.String getDescription() {
    return description;
  }

  /**
   * Sets the value of the 'description' field.
   * Detailed description about the chart   * @param value the value to set.
   */
  public void setDescription(java.lang.String value) {
    this.description = value;
  }

  /**
   * Gets the value of the 'lastModified' field.
   * Captures information about who created/last modified/deleted this chart and when   */
  public com.linkedin.pegasus2avro.common.ChangeAuditStamps getLastModified() {
    return lastModified;
  }

  /**
   * Sets the value of the 'lastModified' field.
   * Captures information about who created/last modified/deleted this chart and when   * @param value the value to set.
   */
  public void setLastModified(com.linkedin.pegasus2avro.common.ChangeAuditStamps value) {
    this.lastModified = value;
  }

  /**
   * Gets the value of the 'chartUrl' field.
   * URL for the chart. This could be used as an external link on DataHub to allow users access/view the chart   */
  public java.lang.String getChartUrl() {
    return chartUrl;
  }

  /**
   * Sets the value of the 'chartUrl' field.
   * URL for the chart. This could be used as an external link on DataHub to allow users access/view the chart   * @param value the value to set.
   */
  public void setChartUrl(java.lang.String value) {
    this.chartUrl = value;
  }

  /**
   * Gets the value of the 'inputs' field.
   * Data sources for the chart
Deprecated! Use inputEdges instead.   */
  public java.util.List<java.lang.Object> getInputs() {
    return inputs;
  }

  /**
   * Sets the value of the 'inputs' field.
   * Data sources for the chart
Deprecated! Use inputEdges instead.   * @param value the value to set.
   */
  public void setInputs(java.util.List<java.lang.Object> value) {
    this.inputs = value;
  }

  /**
   * Gets the value of the 'inputEdges' field.
   * Data sources for the chart   */
  public java.util.List<com.linkedin.pegasus2avro.common.Edge> getInputEdges() {
    return inputEdges;
  }

  /**
   * Sets the value of the 'inputEdges' field.
   * Data sources for the chart   * @param value the value to set.
   */
  public void setInputEdges(java.util.List<com.linkedin.pegasus2avro.common.Edge> value) {
    this.inputEdges = value;
  }

  /**
   * Gets the value of the 'type' field.
   * Type of the chart   */
  public com.linkedin.pegasus2avro.chart.ChartType getType() {
    return type;
  }

  /**
   * Sets the value of the 'type' field.
   * Type of the chart   * @param value the value to set.
   */
  public void setType(com.linkedin.pegasus2avro.chart.ChartType value) {
    this.type = value;
  }

  /**
   * Gets the value of the 'access' field.
   * Access level for the chart   */
  public com.linkedin.pegasus2avro.common.AccessLevel getAccess() {
    return access;
  }

  /**
   * Sets the value of the 'access' field.
   * Access level for the chart   * @param value the value to set.
   */
  public void setAccess(com.linkedin.pegasus2avro.common.AccessLevel value) {
    this.access = value;
  }

  /**
   * Gets the value of the 'lastRefreshed' field.
   * The time when this chart last refreshed   */
  public java.lang.Long getLastRefreshed() {
    return lastRefreshed;
  }

  /**
   * Sets the value of the 'lastRefreshed' field.
   * The time when this chart last refreshed   * @param value the value to set.
   */
  public void setLastRefreshed(java.lang.Long value) {
    this.lastRefreshed = value;
  }

  /** Creates a new ChartInfo RecordBuilder */
  public static com.linkedin.pegasus2avro.chart.ChartInfo.Builder newBuilder() {
    return new com.linkedin.pegasus2avro.chart.ChartInfo.Builder();
  }
  
  /** Creates a new ChartInfo RecordBuilder by copying an existing Builder */
  public static com.linkedin.pegasus2avro.chart.ChartInfo.Builder newBuilder(com.linkedin.pegasus2avro.chart.ChartInfo.Builder other) {
    return new com.linkedin.pegasus2avro.chart.ChartInfo.Builder(other);
  }
  
  /** Creates a new ChartInfo RecordBuilder by copying an existing ChartInfo instance */
  public static com.linkedin.pegasus2avro.chart.ChartInfo.Builder newBuilder(com.linkedin.pegasus2avro.chart.ChartInfo other) {
    return new com.linkedin.pegasus2avro.chart.ChartInfo.Builder(other);
  }
  
  /**
   * RecordBuilder for ChartInfo instances.
   */
  public static class Builder extends org.apache.avro.specific.SpecificRecordBuilderBase<ChartInfo>
    implements org.apache.avro.data.RecordBuilder<ChartInfo> {

    private java.util.Map<java.lang.String,java.lang.String> customProperties;
    private java.lang.String externalUrl;
    private java.lang.String title;
    private java.lang.String description;
    private com.linkedin.pegasus2avro.common.ChangeAuditStamps lastModified;
    private java.lang.String chartUrl;
    private java.util.List<java.lang.Object> inputs;
    private java.util.List<com.linkedin.pegasus2avro.common.Edge> inputEdges;
    private com.linkedin.pegasus2avro.chart.ChartType type;
    private com.linkedin.pegasus2avro.common.AccessLevel access;
    private java.lang.Long lastRefreshed;

    /** Creates a new Builder */
    private Builder() {
      super(com.linkedin.pegasus2avro.chart.ChartInfo.SCHEMA$);
    }
    
    /** Creates a Builder by copying an existing Builder */
    private Builder(com.linkedin.pegasus2avro.chart.ChartInfo.Builder other) {
      super(other);
      if (isValidValue(fields()[0], other.customProperties)) {
        this.customProperties = data().deepCopy(fields()[0].schema(), other.customProperties);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.externalUrl)) {
        this.externalUrl = data().deepCopy(fields()[1].schema(), other.externalUrl);
        fieldSetFlags()[1] = true;
      }
      if (isValidValue(fields()[2], other.title)) {
        this.title = data().deepCopy(fields()[2].schema(), other.title);
        fieldSetFlags()[2] = true;
      }
      if (isValidValue(fields()[3], other.description)) {
        this.description = data().deepCopy(fields()[3].schema(), other.description);
        fieldSetFlags()[3] = true;
      }
      if (isValidValue(fields()[4], other.lastModified)) {
        this.lastModified = data().deepCopy(fields()[4].schema(), other.lastModified);
        fieldSetFlags()[4] = true;
      }
      if (isValidValue(fields()[5], other.chartUrl)) {
        this.chartUrl = data().deepCopy(fields()[5].schema(), other.chartUrl);
        fieldSetFlags()[5] = true;
      }
      if (isValidValue(fields()[6], other.inputs)) {
        this.inputs = data().deepCopy(fields()[6].schema(), other.inputs);
        fieldSetFlags()[6] = true;
      }
      if (isValidValue(fields()[7], other.inputEdges)) {
        this.inputEdges = data().deepCopy(fields()[7].schema(), other.inputEdges);
        fieldSetFlags()[7] = true;
      }
      if (isValidValue(fields()[8], other.type)) {
        this.type = data().deepCopy(fields()[8].schema(), other.type);
        fieldSetFlags()[8] = true;
      }
      if (isValidValue(fields()[9], other.access)) {
        this.access = data().deepCopy(fields()[9].schema(), other.access);
        fieldSetFlags()[9] = true;
      }
      if (isValidValue(fields()[10], other.lastRefreshed)) {
        this.lastRefreshed = data().deepCopy(fields()[10].schema(), other.lastRefreshed);
        fieldSetFlags()[10] = true;
      }
    }
    
    /** Creates a Builder by copying an existing ChartInfo instance */
    private Builder(com.linkedin.pegasus2avro.chart.ChartInfo other) {
            super(com.linkedin.pegasus2avro.chart.ChartInfo.SCHEMA$);
      if (isValidValue(fields()[0], other.customProperties)) {
        this.customProperties = data().deepCopy(fields()[0].schema(), other.customProperties);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.externalUrl)) {
        this.externalUrl = data().deepCopy(fields()[1].schema(), other.externalUrl);
        fieldSetFlags()[1] = true;
      }
      if (isValidValue(fields()[2], other.title)) {
        this.title = data().deepCopy(fields()[2].schema(), other.title);
        fieldSetFlags()[2] = true;
      }
      if (isValidValue(fields()[3], other.description)) {
        this.description = data().deepCopy(fields()[3].schema(), other.description);
        fieldSetFlags()[3] = true;
      }
      if (isValidValue(fields()[4], other.lastModified)) {
        this.lastModified = data().deepCopy(fields()[4].schema(), other.lastModified);
        fieldSetFlags()[4] = true;
      }
      if (isValidValue(fields()[5], other.chartUrl)) {
        this.chartUrl = data().deepCopy(fields()[5].schema(), other.chartUrl);
        fieldSetFlags()[5] = true;
      }
      if (isValidValue(fields()[6], other.inputs)) {
        this.inputs = data().deepCopy(fields()[6].schema(), other.inputs);
        fieldSetFlags()[6] = true;
      }
      if (isValidValue(fields()[7], other.inputEdges)) {
        this.inputEdges = data().deepCopy(fields()[7].schema(), other.inputEdges);
        fieldSetFlags()[7] = true;
      }
      if (isValidValue(fields()[8], other.type)) {
        this.type = data().deepCopy(fields()[8].schema(), other.type);
        fieldSetFlags()[8] = true;
      }
      if (isValidValue(fields()[9], other.access)) {
        this.access = data().deepCopy(fields()[9].schema(), other.access);
        fieldSetFlags()[9] = true;
      }
      if (isValidValue(fields()[10], other.lastRefreshed)) {
        this.lastRefreshed = data().deepCopy(fields()[10].schema(), other.lastRefreshed);
        fieldSetFlags()[10] = true;
      }
    }

    /** Gets the value of the 'customProperties' field */
    public java.util.Map<java.lang.String,java.lang.String> getCustomProperties() {
      return customProperties;
    }
    
    /** Sets the value of the 'customProperties' field */
    public com.linkedin.pegasus2avro.chart.ChartInfo.Builder setCustomProperties(java.util.Map<java.lang.String,java.lang.String> value) {
      validate(fields()[0], value);
      this.customProperties = value;
      fieldSetFlags()[0] = true;
      return this; 
    }
    
    /** Checks whether the 'customProperties' field has been set */
    public boolean hasCustomProperties() {
      return fieldSetFlags()[0];
    }
    
    /** Clears the value of the 'customProperties' field */
    public com.linkedin.pegasus2avro.chart.ChartInfo.Builder clearCustomProperties() {
      customProperties = null;
      fieldSetFlags()[0] = false;
      return this;
    }

    /** Gets the value of the 'externalUrl' field */
    public java.lang.String getExternalUrl() {
      return externalUrl;
    }
    
    /** Sets the value of the 'externalUrl' field */
    public com.linkedin.pegasus2avro.chart.ChartInfo.Builder setExternalUrl(java.lang.String value) {
      validate(fields()[1], value);
      this.externalUrl = value;
      fieldSetFlags()[1] = true;
      return this; 
    }
    
    /** Checks whether the 'externalUrl' field has been set */
    public boolean hasExternalUrl() {
      return fieldSetFlags()[1];
    }
    
    /** Clears the value of the 'externalUrl' field */
    public com.linkedin.pegasus2avro.chart.ChartInfo.Builder clearExternalUrl() {
      externalUrl = null;
      fieldSetFlags()[1] = false;
      return this;
    }

    /** Gets the value of the 'title' field */
    public java.lang.String getTitle() {
      return title;
    }
    
    /** Sets the value of the 'title' field */
    public com.linkedin.pegasus2avro.chart.ChartInfo.Builder setTitle(java.lang.String value) {
      validate(fields()[2], value);
      this.title = value;
      fieldSetFlags()[2] = true;
      return this; 
    }
    
    /** Checks whether the 'title' field has been set */
    public boolean hasTitle() {
      return fieldSetFlags()[2];
    }
    
    /** Clears the value of the 'title' field */
    public com.linkedin.pegasus2avro.chart.ChartInfo.Builder clearTitle() {
      title = null;
      fieldSetFlags()[2] = false;
      return this;
    }

    /** Gets the value of the 'description' field */
    public java.lang.String getDescription() {
      return description;
    }
    
    /** Sets the value of the 'description' field */
    public com.linkedin.pegasus2avro.chart.ChartInfo.Builder setDescription(java.lang.String value) {
      validate(fields()[3], value);
      this.description = value;
      fieldSetFlags()[3] = true;
      return this; 
    }
    
    /** Checks whether the 'description' field has been set */
    public boolean hasDescription() {
      return fieldSetFlags()[3];
    }
    
    /** Clears the value of the 'description' field */
    public com.linkedin.pegasus2avro.chart.ChartInfo.Builder clearDescription() {
      description = null;
      fieldSetFlags()[3] = false;
      return this;
    }

    /** Gets the value of the 'lastModified' field */
    public com.linkedin.pegasus2avro.common.ChangeAuditStamps getLastModified() {
      return lastModified;
    }
    
    /** Sets the value of the 'lastModified' field */
    public com.linkedin.pegasus2avro.chart.ChartInfo.Builder setLastModified(com.linkedin.pegasus2avro.common.ChangeAuditStamps value) {
      validate(fields()[4], value);
      this.lastModified = value;
      fieldSetFlags()[4] = true;
      return this; 
    }
    
    /** Checks whether the 'lastModified' field has been set */
    public boolean hasLastModified() {
      return fieldSetFlags()[4];
    }
    
    /** Clears the value of the 'lastModified' field */
    public com.linkedin.pegasus2avro.chart.ChartInfo.Builder clearLastModified() {
      lastModified = null;
      fieldSetFlags()[4] = false;
      return this;
    }

    /** Gets the value of the 'chartUrl' field */
    public java.lang.String getChartUrl() {
      return chartUrl;
    }
    
    /** Sets the value of the 'chartUrl' field */
    public com.linkedin.pegasus2avro.chart.ChartInfo.Builder setChartUrl(java.lang.String value) {
      validate(fields()[5], value);
      this.chartUrl = value;
      fieldSetFlags()[5] = true;
      return this; 
    }
    
    /** Checks whether the 'chartUrl' field has been set */
    public boolean hasChartUrl() {
      return fieldSetFlags()[5];
    }
    
    /** Clears the value of the 'chartUrl' field */
    public com.linkedin.pegasus2avro.chart.ChartInfo.Builder clearChartUrl() {
      chartUrl = null;
      fieldSetFlags()[5] = false;
      return this;
    }

    /** Gets the value of the 'inputs' field */
    public java.util.List<java.lang.Object> getInputs() {
      return inputs;
    }
    
    /** Sets the value of the 'inputs' field */
    public com.linkedin.pegasus2avro.chart.ChartInfo.Builder setInputs(java.util.List<java.lang.Object> value) {
      validate(fields()[6], value);
      this.inputs = value;
      fieldSetFlags()[6] = true;
      return this; 
    }
    
    /** Checks whether the 'inputs' field has been set */
    public boolean hasInputs() {
      return fieldSetFlags()[6];
    }
    
    /** Clears the value of the 'inputs' field */
    public com.linkedin.pegasus2avro.chart.ChartInfo.Builder clearInputs() {
      inputs = null;
      fieldSetFlags()[6] = false;
      return this;
    }

    /** Gets the value of the 'inputEdges' field */
    public java.util.List<com.linkedin.pegasus2avro.common.Edge> getInputEdges() {
      return inputEdges;
    }
    
    /** Sets the value of the 'inputEdges' field */
    public com.linkedin.pegasus2avro.chart.ChartInfo.Builder setInputEdges(java.util.List<com.linkedin.pegasus2avro.common.Edge> value) {
      validate(fields()[7], value);
      this.inputEdges = value;
      fieldSetFlags()[7] = true;
      return this; 
    }
    
    /** Checks whether the 'inputEdges' field has been set */
    public boolean hasInputEdges() {
      return fieldSetFlags()[7];
    }
    
    /** Clears the value of the 'inputEdges' field */
    public com.linkedin.pegasus2avro.chart.ChartInfo.Builder clearInputEdges() {
      inputEdges = null;
      fieldSetFlags()[7] = false;
      return this;
    }

    /** Gets the value of the 'type' field */
    public com.linkedin.pegasus2avro.chart.ChartType getType() {
      return type;
    }
    
    /** Sets the value of the 'type' field */
    public com.linkedin.pegasus2avro.chart.ChartInfo.Builder setType(com.linkedin.pegasus2avro.chart.ChartType value) {
      validate(fields()[8], value);
      this.type = value;
      fieldSetFlags()[8] = true;
      return this; 
    }
    
    /** Checks whether the 'type' field has been set */
    public boolean hasType() {
      return fieldSetFlags()[8];
    }
    
    /** Clears the value of the 'type' field */
    public com.linkedin.pegasus2avro.chart.ChartInfo.Builder clearType() {
      type = null;
      fieldSetFlags()[8] = false;
      return this;
    }

    /** Gets the value of the 'access' field */
    public com.linkedin.pegasus2avro.common.AccessLevel getAccess() {
      return access;
    }
    
    /** Sets the value of the 'access' field */
    public com.linkedin.pegasus2avro.chart.ChartInfo.Builder setAccess(com.linkedin.pegasus2avro.common.AccessLevel value) {
      validate(fields()[9], value);
      this.access = value;
      fieldSetFlags()[9] = true;
      return this; 
    }
    
    /** Checks whether the 'access' field has been set */
    public boolean hasAccess() {
      return fieldSetFlags()[9];
    }
    
    /** Clears the value of the 'access' field */
    public com.linkedin.pegasus2avro.chart.ChartInfo.Builder clearAccess() {
      access = null;
      fieldSetFlags()[9] = false;
      return this;
    }

    /** Gets the value of the 'lastRefreshed' field */
    public java.lang.Long getLastRefreshed() {
      return lastRefreshed;
    }
    
    /** Sets the value of the 'lastRefreshed' field */
    public com.linkedin.pegasus2avro.chart.ChartInfo.Builder setLastRefreshed(java.lang.Long value) {
      validate(fields()[10], value);
      this.lastRefreshed = value;
      fieldSetFlags()[10] = true;
      return this; 
    }
    
    /** Checks whether the 'lastRefreshed' field has been set */
    public boolean hasLastRefreshed() {
      return fieldSetFlags()[10];
    }
    
    /** Clears the value of the 'lastRefreshed' field */
    public com.linkedin.pegasus2avro.chart.ChartInfo.Builder clearLastRefreshed() {
      lastRefreshed = null;
      fieldSetFlags()[10] = false;
      return this;
    }

    @Override
    public ChartInfo build() {
      try {
        ChartInfo record = new ChartInfo();
        record.customProperties = fieldSetFlags()[0] ? this.customProperties : (java.util.Map<java.lang.String,java.lang.String>) defaultValue(fields()[0]);
        record.externalUrl = fieldSetFlags()[1] ? this.externalUrl : (java.lang.String) defaultValue(fields()[1]);
        record.title = fieldSetFlags()[2] ? this.title : (java.lang.String) defaultValue(fields()[2]);
        record.description = fieldSetFlags()[3] ? this.description : (java.lang.String) defaultValue(fields()[3]);
        record.lastModified = fieldSetFlags()[4] ? this.lastModified : (com.linkedin.pegasus2avro.common.ChangeAuditStamps) defaultValue(fields()[4]);
        record.chartUrl = fieldSetFlags()[5] ? this.chartUrl : (java.lang.String) defaultValue(fields()[5]);
        record.inputs = fieldSetFlags()[6] ? this.inputs : (java.util.List<java.lang.Object>) defaultValue(fields()[6]);
        record.inputEdges = fieldSetFlags()[7] ? this.inputEdges : (java.util.List<com.linkedin.pegasus2avro.common.Edge>) defaultValue(fields()[7]);
        record.type = fieldSetFlags()[8] ? this.type : (com.linkedin.pegasus2avro.chart.ChartType) defaultValue(fields()[8]);
        record.access = fieldSetFlags()[9] ? this.access : (com.linkedin.pegasus2avro.common.AccessLevel) defaultValue(fields()[9]);
        record.lastRefreshed = fieldSetFlags()[10] ? this.lastRefreshed : (java.lang.Long) defaultValue(fields()[10]);
        return record;
      } catch (Exception e) {
        throw new org.apache.avro.AvroRuntimeException(e);
      }
    }
  }
}
