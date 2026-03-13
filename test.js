
export const createInvoiceStyles = {
  // Layout
  pageContainer: "space-y-8 font-[pacifico]",
  mainGrid: "grid lg:grid-cols-3 gap-8",
  leftColumn: "lg:col-span-2 space-y-8",
  rightColumn: "space-y-8",
  
  // Header
  headerContainer: "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4",
  headerTitle: "text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight",
  headerSubtitle: "mt-2 text-lg text-gray-600 max-w-3xl",
  headerButtonContainer: "flex items-center gap-3",
  
  // Cards/Sections
cardContainer: "bg-white/80 backdrop-blur-xl rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-200/60 shadow-sm w-full",

cardSmallContainer: "bg-white/80 backdrop-blur-xl rounded-2xl p-3 sm:p-4 md:p-6 border border-gray-200/60 shadow-sm w-full",

cardHeaderContainer: "flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-4 sm:mb-6",


cardHeaderWithButton: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4 sm:mb-6",

cardHeaderLeft: "flex items-center gap-2 sm:gap-3",

cardIconContainer: "p-2 rounded-lg w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center",

cardTitle: "text-xl sm:text-2xl font-semibold text-gray-900",

cardSubtitle: "text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4",


  
  // Grid
  gridCols1: "grid grid-cols-1  gap-6",
  gridCols2: "grid grid-cols-1 md:grid-cols-2 gap-6",
  gridCols3: "grid grid-cols-1 md:grid-cols-3 gap-6",
  gridCols2Lg: "grid grid-cols-1 lg:grid-cols-2 gap-8",
  gridColSpan2: "md:col-span-2 ",
  
  // Form Elements
  label: "block text-sm font-medium text-gray-700 mb-2",
  labelWithMargin: "block text-sm font-medium text-gray-700 mb-3",
  input: "w-full rounded-xl border border-gray-300 px-4 py-3 bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200",
  inputMedium: "w-full rounded-xl border border-gray-300 px-4 py-3 bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 font-medium",
  inputCenter: "w-full rounded-xl border border-gray-300 px-4 py-3 bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-center font-medium",
  textarea: "w-full rounded-xl border border-gray-300 px-4 py-3 bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200",
  inputSmall: "w-full rounded-xl border text-gray-500 border-gray-300 px-4 py-3 bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-sm",
  
  // Buttons
  previewButton: "inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 font-medium shadow-sm",
  saveButton: "inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed",
  saveProfileButton: "inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-100 transition-all duration-200 text-sm font-medium",
  addItemButton: "inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-dashed border-gray-300 text-gray-600 hover:border-gray-400 hover:text-gray-700 transition-all duration-200 font-medium w-full justify-center group",
  
  // Currency & Status
  currencyContainer: "flex gap-3",
  currencyButton: "flex items-center gap-3 px-4 py-3 rounded-xl border-2 transition-all duration-200 flex-1",
  currencyButtonActive1: "border-green-500 bg-green-50 text-green-700 shadow-sm",
  currencyButtonActive2: "border-blue-500 bg-blue-50 text-blue-700 shadow-sm",
  currencyButtonInactive: "border-gray-200 bg-white text-gray-600 hover:border-gray-300",
  statusContainer: "flex flex-wrap gap-2",
  statusButton: "relative overflow-hidden rounded-full transition-all duration-200 ease-out",
  statusButtonActive: "ring-2 ring-offset-2 ring-blue-500 transform scale-105",
  statusButtonInactive: "opacity-80 hover:opacity-100 hover:scale-105",
  statusDropdown: "mt-2 sm:hidden w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200",
  currencyBadge: "text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-lg",
  
  // Desktop header (lg+)
  itemsTableHeader:
    "hidden lg:grid lg:grid-cols-12 gap-4 mb-4 px-2 text-sm font-medium text-gray-700 items-center min-w-0",

  // Row: mobile-first grid; becomes 12 cols at sm and above
  itemsTableRow:
    "grid grid-cols-6 sm:grid-cols-12 lg:grid-cols-12 gap-4 items-center group hover:bg-gray-50 p-3 rounded-xl transition-all duration-200 min-w-0",

  // Description input: truncate text on lg to avoid overflow
  itemsInput:
    "rounded-xl border border-gray-300 px-4 py-3 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 w-full min-w-0 overflow-hidden truncate text-sm sm:text-base",

  // Numeric inputs baseline styling (we keep them as text with inputMode for numeric keyboard)
  itemsNumberInput:
    "rounded-xl border border-gray-300 px-3 py-3 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 text-right w-full min-w-0 overflow-x-auto whitespace-nowrap text-sm sm:text-base",

  // Total: allow wrapping at break points (we add zero-width-space after commas to permit wraps)
  itemsTotal:
    "text-center font-medium text-gray-900 flex items-center justify-center min-w-0 max-w-full break-words text-left text-sm sm:text-base",

  // Remove button: visible & tap-friendly
  itemsRemoveButton:
    "flex items-center justify-center p-2 rounded-lg text-rose-600 hover:bg-rose-50 transition-all duration-200 focus:outline-none",

  // per-field label: shown below lg (stacked labels)
  itemsFieldLabel: "block text-xs font-medium text-gray-600 mb-1",

  
  itemsListWrapper: "space-y-4",

  itemRow: "min-w-0",

  itemColDescription:
    "col-span-6 sm:col-span-6 md:col-span-6 lg:col-span-3 min-w-0",

  itemColQuantity:
    "col-span-6 sm:col-span-2 md:col-span-2 lg:col-span-2 min-w-0",

  itemColUnitPrice:
    "col-span-6 sm:col-span-2 md:col-span-2 lg:col-span-3 min-w-0",

  itemColTotal:
    "col-span-6 sm:col-span-1 md:col-span-1 lg:col-span-3 min-w-0",

  itemColRemove:
    "col-span-6 sm:col-span-1 md:col-span-1 lg:col-span-1 flex justify-center min-w-0",
  
  // Upload Areas
  uploadArea: "border-4 border-dashed border-gray-300 rounded-2xl p-6 transition-all duration-300 hover:border-gray-400 group",
  uploadSmallArea: "border-4 border-dashed border-gray-300 rounded-2xl p-6 transition-all duration-300 hover:border-gray-400 group",
  imagePreviewContainer: "text-center space-y-4",
  logoPreview: "w-32 h-24 lg:w-28 lg:h-20  mx-auto  rounded-xl overflow-hidden flex items-center  justify-center ",
  stampPreview: "w-24 h-20 mx-auto  rounded-xl overflow-hidden flex items-center justify-center bg-white",
  signaturePreview: "w-24 h-16 mx-auto  rounded-xl overflow-hidden flex items-center justify-center bg-white",
  buttonGroup: "flex lg:flex-col xl:flex-row  gap-2 justify-center",
  changeButton: "inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition-all duration-200 cursor-pointer text-sm font-medium",
  removeButton: "inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-rose-50 text-rose-700 hover:bg-rose-100 transition-all duration-200 text-sm font-medium",
  uploadIconContainer: "w-12 h-12 mx-auto rounded-full bg-gray-100 flex items-center justify-center text-gray-400",
  uploadSmallIconContainer: "w-10 h-10 mx-auto rounded-full bg-gray-100 flex items-center justify-center text-gray-400",
  uploadTextTitle: "text-sm font-medium text-gray-900",
  uploadTextSubtitle: "text-xs text-gray-500 mt-1",
  
  // Summary & Tax
  summaryRow: "flex items-center justify-between py-3 border-b border-gray-200",
  summaryLabel: "text-sm font-medium text-gray-600",
  summaryValue: "font-semibold text-gray-900",
  taxRow: "flex items-center justify-between py-2",
  totalRow: "flex items-center justify-between py-3 border-t border-gray-200",
  totalLabel: "text-lg font-bold text-gray-900",
  totalValue: "text-lg font-bold text-gray-900",
  
  // Animation
  hoverScale: "group-hover:scale-105 transition-transform duration-300",
  iconHover: "group-hover:scale-110 transition-transform"
};