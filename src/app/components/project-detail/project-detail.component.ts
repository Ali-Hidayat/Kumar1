import { Component } from '@angular/core';
import Swiper from 'swiper';

declare var google: any;

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent {

 ngOnInit() {
    this.initMap();
  }

selectedTab: string = 'walkthrough';

selectTab(tab: string) {
  this.selectedTab = tab;

}
  // Accordian 
faqItems = [
    {
      label: 'Ut inventore dolorem hic tenetur accusamus',
      content: [
        'Lorem ipsum dolor sit amet. Sit dignissimos officia et beatae quia qui veritatis consequatur et eaque eius non sequi accusamus sed quasi voluptatem est dolor laborum. Sit quos explicabo qui aliquid natus ut laborum placeat.',
        'Lorem ipsum dolor sit amet. Sit dignissimos officia et beatae quia qui veritatis consequatur et eaque eius non sequi accusamus sed quasi voluptatem est dolor laborum. Sit quos explicabo qui aliquid natus ut laborum placeat.'
      ],
      show: false
    },
    {
      label: 'Ut aliquid adipisci et placeat labore et tenetur voluptate',
      content: [
        'Quo natus nisi ea nostrum reiciendis non dolorum rerum est recusandae reiciendis. Qui sunt consectetur eos quisquam voluptate aut esse vitae aut veniam optio ut ducimus tenetur. Hic consequuntur modi eum enim beatae ut officia molestiae. Hic nostrum iusto 33 vero libero sit reiciendis culpa.',
        'Lorem ipsum dolor sit amet. Sit dignissimos officia et beatae quia qui veritatis consequatur et eaque eius non sequi accusamus sed quasi voluptatem est dolor laborum. Sit quos explicabo qui aliquid natus ut laborum placeat.'
      ],
      show: false
    },
    // Add more FAQ items as needed
  ];

  toggleFaqItem(item: any) {
    item.show = !item.show;
  }


ngAfterviewInit() {
   let BlogSwiper = new Swiper(".swiper-container-Gallary", {
  slidesPerView: 2.5,
  spaceBetween: 5,
  cssMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "fraction",
  }, navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
}




initMap() {
     const bounds = new google.maps.LatLngBounds();
    const markersArray: any = [];
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 13.10017592780984, lng: 77.59410554160017 },
      zoom: 10,
    });

    const service = new google.maps.DistanceMatrixService();
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);

    const originArray = [{ lat: 13.10017592780984, lng: 77.59410554160017 }];
    const destinationArray = [
      { lat: 13.0623983, lng: 77.51820989999999 },
      { lat: 13.0627621, lng: 77.51799740000001 },
      { lat: 13.0648311, lng: 77.517247 },
      { lat: 13.056048, lng: 77.51347400000009 },
      { lat: 13.042341019101595, lng: 77.55467234499216 },
      { lat: 13.0575157, lng: 77.51066370000001 },
      { lat: 13.16704440373213, lng: 77.68160944716794 },
    ];

    function calculateAndDisplayRoute(index: any, directionsService: any, directionsRenderer: any) {
      directionsService
        .route({
          origin: originArray[0],
          destination: destinationArray[index],
          travelMode: google.maps.TravelMode.DRIVING,
        })
        .then((response: any) => {
          directionsRenderer.setDirections(response);
        })
        .catch((e: any) => window.alert("Directions request failed due to " + status));
    }

    function drawPath(e: any) {
      let index = e.target.parentNode.getAttribute("data-val");
      if (index) {
        calculateAndDisplayRoute(index - 1, directionsService, directionsRenderer);
      }
    }

    document.getElementById("sidebar-text")?.addEventListener("click", drawPath);

    const request = {
      origins: originArray,
      destinations: destinationArray,
      travelMode: google.maps.TravelMode.DRIVING,
      unitSystem: google.maps.UnitSystem.METRIC,
      avoidHighways: false,
      avoidTolls: false,
    };

    service.getDistanceMatrix(request).then((response: any) => {
      response.rows[0].elements.forEach((res: any, index: any) => {
        const distance = res.distance.text;
        const duration = res.duration.text;
        console.log(`distance: ${distance}, duration: ${duration}`);
        const html = `
          <div class="path-marker">
            <div class="distance">${distance}</div>
            <div class="duration">${duration}</div>
          </div>`;
        document
          .querySelectorAll(".path-mark")
          [index].insertAdjacentHTML("beforeend", html);
      });

      const originList = response.originAddresses;
      const destinationList = response.destinationAddresses;
      deleteMarkers(markersArray);

      for (let i = 0; i < originList.length; i++) {
        const results = response.rows[i].elements;
        showGeocodedAddressOnMap(false);
        for (let j = 0; j < results.length; j++) {
          showGeocodedAddressOnMap(true);
        }
      }

      function showGeocodedAddressOnMap(asDestination: any) {
        const handler = ({ results }: any) => {
          map.fitBounds(bounds.extend(results[0].geometry.location));
          markersArray.push(
            new google.maps.Marker({
              map: map,
              position: results[0].geometry.location,
              icon: asDestination
                ? {
                    url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
                  }
                : {
                    url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
                  },
            })
          );
        };
        if (asDestination) {
  for (let i = 0; i < destinationList.length; i++) {
    new google.maps.Geocoder().geocode(
      { address: destinationList[i] },
      handler
    );
  }
} else {
  for (let i = 0; i < originList.length; i++) {
    new google.maps.Geocoder().geocode(
      { address: originList[i] },
      handler
    );
  }
}

      }
    });

    function deleteMarkers(markersArray: any) {
      for (let i = 0; i < markersArray.length; i++) {
        markersArray[i].setMap(null);
      }
      markersArray = [];
    }
  }

}
