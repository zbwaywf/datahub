/**
 * Autogenerated by Avro
 * 
 * DO NOT EDIT DIRECTLY
 */
package com.linkedin.pegasus2avro.metadata.key;  
@SuppressWarnings("all")
/** Key for a Chart */
@org.apache.avro.specific.AvroGenerated
public class ChartKey extends org.apache.avro.specific.SpecificRecordBase implements org.apache.avro.specific.SpecificRecord {
  public static final org.apache.avro.Schema SCHEMA$ = new org.apache.avro.Schema.Parser().parse("{\"type\":\"record\",\"name\":\"ChartKey\",\"namespace\":\"com.linkedin.pegasus2avro.metadata.key\",\"doc\":\"Key for a Chart\",\"fields\":[{\"name\":\"dashboardTool\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"The name of the dashboard tool such as looker, redash etc.\",\"Searchable\":{\"boostScore\":4.0,\"fieldName\":\"tool\",\"fieldType\":\"TEXT_PARTIAL\"}},{\"name\":\"chartId\",\"type\":{\"type\":\"string\",\"avro.java.string\":\"String\"},\"doc\":\"Unique id for the chart. This id should be globally unique for a dashboarding tool even when there are multiple deployments of it. As an example, chart URL could be used here for Looker such as 'looker.linkedin.com/looks/1234'\"}],\"Aspect\":{\"name\":\"chartKey\"}}");
  public static org.apache.avro.Schema getClassSchema() { return SCHEMA$; }
  /** The name of the dashboard tool such as looker, redash etc. */
  @Deprecated public java.lang.String dashboardTool;
  /** Unique id for the chart. This id should be globally unique for a dashboarding tool even when there are multiple deployments of it. As an example, chart URL could be used here for Looker such as 'looker.linkedin.com/looks/1234' */
  @Deprecated public java.lang.String chartId;

  /**
   * Default constructor.  Note that this does not initialize fields
   * to their default values from the schema.  If that is desired then
   * one should use <code>newBuilder()</code>. 
   */
  public ChartKey() {}

  /**
   * All-args constructor.
   */
  public ChartKey(java.lang.String dashboardTool, java.lang.String chartId) {
    this.dashboardTool = dashboardTool;
    this.chartId = chartId;
  }

  public org.apache.avro.Schema getSchema() { return SCHEMA$; }
  // Used by DatumWriter.  Applications should not call. 
  public java.lang.Object get(int field$) {
    switch (field$) {
    case 0: return dashboardTool;
    case 1: return chartId;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }
  // Used by DatumReader.  Applications should not call. 
  @SuppressWarnings(value="unchecked")
  public void put(int field$, java.lang.Object value$) {
    switch (field$) {
    case 0: dashboardTool = (java.lang.String)value$; break;
    case 1: chartId = (java.lang.String)value$; break;
    default: throw new org.apache.avro.AvroRuntimeException("Bad index");
    }
  }

  /**
   * Gets the value of the 'dashboardTool' field.
   * The name of the dashboard tool such as looker, redash etc.   */
  public java.lang.String getDashboardTool() {
    return dashboardTool;
  }

  /**
   * Sets the value of the 'dashboardTool' field.
   * The name of the dashboard tool such as looker, redash etc.   * @param value the value to set.
   */
  public void setDashboardTool(java.lang.String value) {
    this.dashboardTool = value;
  }

  /**
   * Gets the value of the 'chartId' field.
   * Unique id for the chart. This id should be globally unique for a dashboarding tool even when there are multiple deployments of it. As an example, chart URL could be used here for Looker such as 'looker.linkedin.com/looks/1234'   */
  public java.lang.String getChartId() {
    return chartId;
  }

  /**
   * Sets the value of the 'chartId' field.
   * Unique id for the chart. This id should be globally unique for a dashboarding tool even when there are multiple deployments of it. As an example, chart URL could be used here for Looker such as 'looker.linkedin.com/looks/1234'   * @param value the value to set.
   */
  public void setChartId(java.lang.String value) {
    this.chartId = value;
  }

  /** Creates a new ChartKey RecordBuilder */
  public static com.linkedin.pegasus2avro.metadata.key.ChartKey.Builder newBuilder() {
    return new com.linkedin.pegasus2avro.metadata.key.ChartKey.Builder();
  }
  
  /** Creates a new ChartKey RecordBuilder by copying an existing Builder */
  public static com.linkedin.pegasus2avro.metadata.key.ChartKey.Builder newBuilder(com.linkedin.pegasus2avro.metadata.key.ChartKey.Builder other) {
    return new com.linkedin.pegasus2avro.metadata.key.ChartKey.Builder(other);
  }
  
  /** Creates a new ChartKey RecordBuilder by copying an existing ChartKey instance */
  public static com.linkedin.pegasus2avro.metadata.key.ChartKey.Builder newBuilder(com.linkedin.pegasus2avro.metadata.key.ChartKey other) {
    return new com.linkedin.pegasus2avro.metadata.key.ChartKey.Builder(other);
  }
  
  /**
   * RecordBuilder for ChartKey instances.
   */
  public static class Builder extends org.apache.avro.specific.SpecificRecordBuilderBase<ChartKey>
    implements org.apache.avro.data.RecordBuilder<ChartKey> {

    private java.lang.String dashboardTool;
    private java.lang.String chartId;

    /** Creates a new Builder */
    private Builder() {
      super(com.linkedin.pegasus2avro.metadata.key.ChartKey.SCHEMA$);
    }
    
    /** Creates a Builder by copying an existing Builder */
    private Builder(com.linkedin.pegasus2avro.metadata.key.ChartKey.Builder other) {
      super(other);
      if (isValidValue(fields()[0], other.dashboardTool)) {
        this.dashboardTool = data().deepCopy(fields()[0].schema(), other.dashboardTool);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.chartId)) {
        this.chartId = data().deepCopy(fields()[1].schema(), other.chartId);
        fieldSetFlags()[1] = true;
      }
    }
    
    /** Creates a Builder by copying an existing ChartKey instance */
    private Builder(com.linkedin.pegasus2avro.metadata.key.ChartKey other) {
            super(com.linkedin.pegasus2avro.metadata.key.ChartKey.SCHEMA$);
      if (isValidValue(fields()[0], other.dashboardTool)) {
        this.dashboardTool = data().deepCopy(fields()[0].schema(), other.dashboardTool);
        fieldSetFlags()[0] = true;
      }
      if (isValidValue(fields()[1], other.chartId)) {
        this.chartId = data().deepCopy(fields()[1].schema(), other.chartId);
        fieldSetFlags()[1] = true;
      }
    }

    /** Gets the value of the 'dashboardTool' field */
    public java.lang.String getDashboardTool() {
      return dashboardTool;
    }
    
    /** Sets the value of the 'dashboardTool' field */
    public com.linkedin.pegasus2avro.metadata.key.ChartKey.Builder setDashboardTool(java.lang.String value) {
      validate(fields()[0], value);
      this.dashboardTool = value;
      fieldSetFlags()[0] = true;
      return this; 
    }
    
    /** Checks whether the 'dashboardTool' field has been set */
    public boolean hasDashboardTool() {
      return fieldSetFlags()[0];
    }
    
    /** Clears the value of the 'dashboardTool' field */
    public com.linkedin.pegasus2avro.metadata.key.ChartKey.Builder clearDashboardTool() {
      dashboardTool = null;
      fieldSetFlags()[0] = false;
      return this;
    }

    /** Gets the value of the 'chartId' field */
    public java.lang.String getChartId() {
      return chartId;
    }
    
    /** Sets the value of the 'chartId' field */
    public com.linkedin.pegasus2avro.metadata.key.ChartKey.Builder setChartId(java.lang.String value) {
      validate(fields()[1], value);
      this.chartId = value;
      fieldSetFlags()[1] = true;
      return this; 
    }
    
    /** Checks whether the 'chartId' field has been set */
    public boolean hasChartId() {
      return fieldSetFlags()[1];
    }
    
    /** Clears the value of the 'chartId' field */
    public com.linkedin.pegasus2avro.metadata.key.ChartKey.Builder clearChartId() {
      chartId = null;
      fieldSetFlags()[1] = false;
      return this;
    }

    @Override
    public ChartKey build() {
      try {
        ChartKey record = new ChartKey();
        record.dashboardTool = fieldSetFlags()[0] ? this.dashboardTool : (java.lang.String) defaultValue(fields()[0]);
        record.chartId = fieldSetFlags()[1] ? this.chartId : (java.lang.String) defaultValue(fields()[1]);
        return record;
      } catch (Exception e) {
        throw new org.apache.avro.AvroRuntimeException(e);
      }
    }
  }
}
