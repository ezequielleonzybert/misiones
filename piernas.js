class Terrain {

  constructor(res,hmin,hmax){
    arraylist segments
    let i =0;
    while(i<w){
      r1 = random(hmin, hmax)
      r2 = random(hmin, hmax)
      point p1 = point(i, r1)
      i+=w*res
      point p2 = point(i, r2)
      segment = {"a":p1, "b":p2}
      segments.pushback(segment)
    }
  }

  draw(){
    for(each s in segments){
      line(s.a, s.b)
    }
  }

  getSegment(a){
    return segments[a]
  }
}