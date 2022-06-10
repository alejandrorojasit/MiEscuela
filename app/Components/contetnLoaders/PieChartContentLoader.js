import ContentLoader from "react-content-loader"

const PieChartContentLoader = () => (
   <ContentLoader 
      speed={2}
      height={400}
      width='100%'
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
   >
      <circle cx="250" cy="200" r="125" /> 
      <rect x="120" y="40" rx="0" ry="0" width="250" height="10" /> 
      <rect x="400" y="80" rx="0" ry="0" width="70" height="10" /> 
      <rect x="400" y="100" rx="0" ry="0" width="70" height="10" />
   </ContentLoader>
)

export default PieChartContentLoader
