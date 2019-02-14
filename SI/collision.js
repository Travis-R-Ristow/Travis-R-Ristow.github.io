function collision(obj1, obj2){
	if(obj1.getX() < obj2.getX() + obj2.getW() &&
	   obj1.getX() + obj1.getW() > obj2.getX() &&
	   obj1.getY() < obj2.getY() + obj2.getH() &&
	   obj1.getY() + obj1.getH() > obj2.getY()) {
		return true;
	}
	return false;
}