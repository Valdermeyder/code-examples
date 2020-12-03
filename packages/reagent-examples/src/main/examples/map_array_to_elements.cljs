(ns examples.map-array-to-elements)

(defonce table-config {:headers ["Rank" "Country" "Gold" "Silver" "Bronze" "Total"]})

(defn table-header []
  [:tr
   (map (fn [header]
          [:th {:key header} header]) (:headers table-config))])
